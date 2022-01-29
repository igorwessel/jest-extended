import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeString` when checking if a value is a `String`.
       */
      toBeString(): R;
    }
    interface Expect {
      /**
       * Use `.toBeString` when checking if a value is a `String`.
       */
      toBeString(): void;
    }
  }
}

const passMessage = (received: unknown) => () =>
  matcherHint('.not.toBeString', 'received', '') +
  '\n\n' +
  'Expected value to not be of type string received:\n' +
  `  ${printReceived(received)}`;

const failMessage = (received: unknown) => () =>
  matcherHint('.toBeString', 'received', '') +
  '\n\n' +
  'Expected value to be of type string:\n' +
  `  ${printExpected('type of string')}\n` +
  'Received:\n' +
  `  ${printReceived(typeof received)}`;

export function toBeString(expected: unknown): jest.CustomMatcherResult {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
