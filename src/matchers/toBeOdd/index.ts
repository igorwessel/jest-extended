import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeOdd` when checking if a value is an odd `Number`.
       */
      toBeOdd(): R;
    }
    interface Expect {
      /**
       * Use `.toBeOdd` when checking if a value is an odd `Number`.
       */
      toBeOdd(): void;
    }
  }
}

const passMessage = (received: number | string) => () =>
  matcherHint('.not.toBeOdd', 'received', '') +
  '\n\n' +
  'Expected value to not be odd received:\n' +
  `  ${printReceived(received)}`;

const failMessage = (received: number | string) => () =>
  matcherHint('.toBeOdd', 'received', '') +
  '\n\n' +
  'Expected value to be odd received:\n' +
  `  ${printReceived(received)}`;

export function toBeOdd(expected: number | string): jest.CustomMatcherResult {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
