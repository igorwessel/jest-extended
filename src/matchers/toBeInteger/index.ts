import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeInteger` when checking if a value is an integer.
       */
      toBeInteger(): R;
    }
    interface Expect {
      /**
       * Use `.toBeInteger` when checking if a value is an integer.
       */
      toBeInteger(): void;
    }
  }
}

const passMessage = (received: any) => () =>
  matcherHint('.not.toBeInteger', 'received', '') +
  '\n\n' +
  'Expected value to not be an integer received:\n' +
  `  ${printReceived(received)}`;

const failMessage = (received: any) => () =>
  matcherHint('.toBeInteger', 'received', '') +
  '\n\n' +
  'Expected value to be an integer received:\n' +
  `  ${printReceived(received)}`;

export function toBeInteger(expected: any): jest.CustomMatcherResult {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
