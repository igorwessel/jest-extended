import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeNumber` when checking if a value is a `Number`.
       */
      toBeNumber(): R;
    }
    interface Expect {
      /**
       * Use `.toBeNumber` when checking if a value is a `Number`.
       */
      toBeNumber(): void;
    }
  }
}

const passMessage = (received: unknown) => () =>
  matcherHint('.not.toBeNumber', 'received', '') +
  '\n\n' +
  'Expected value to not be a number received:\n' +
  `  ${printReceived(received)}`;

const failMessage = (received: unknown) => () =>
  matcherHint('.toBeNumber', 'received', '') +
  '\n\n' +
  'Expected value to be a number received:\n' +
  `  ${printReceived(received)}`;

export function toBeNumber(expected: unknown): jest.CustomMatcherResult {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
