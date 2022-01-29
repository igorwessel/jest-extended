import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeFinite` when checking if a value is a `Number`, not `NaN` or `Infinity`.
       */
      toBeFinite(): R;
    }
    interface Expect {
      /**
       * Use `.toBeFinite` when checking if a value is a `Number`, not `NaN` or `Infinity`.
       */
      toBeFinite(): void;
    }
  }
}

const passMessage = (received: number) => () =>
  matcherHint('.not.toBeFinite', 'received', '') +
  '\n\n' +
  'Expected value to not be finite received:\n' +
  `  ${printReceived(received)}`;

const failMessage = (received: number) => () =>
  matcherHint('.toBeFinite', 'received', '') +
  '\n\n' +
  'Expected value to be finite received:\n' +
  `  ${printReceived(received)}`;

export function toBeFinite(expected: number): jest.CustomMatcherResult {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
