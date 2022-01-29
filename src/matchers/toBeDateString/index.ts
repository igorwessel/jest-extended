import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeDateString` when checking if a value is a valid date string.
       */
      toBeDateString(): R;
    }

    interface Expect {
      /**
       * Use `.toBeDateString` when checking if a value is a valid date string.
       */
      toBeDateString(): void;
    }
  }
}

const passMessage = (received: any) => () =>
  matcherHint('.not.toBeDateString', 'received', '') +
  '\n\n' +
  'Expected value to not be a date string received:\n' +
  `  ${printReceived(received)}`;

const failMessage = (received: any) => () =>
  matcherHint('.toBeDateString', 'received', '') +
  '\n\n' +
  'Expected value to be a date string received:\n' +
  `  ${printReceived(received)}`;

export function toBeDateString(expected: any): jest.CustomMatcherResult {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
