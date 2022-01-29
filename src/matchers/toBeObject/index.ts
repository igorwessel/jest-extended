import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeObject` when checking if a value is an `Object`.
       */
      toBeObject(): R;
    }
    interface Expect {
      /**
       * Use `.toBeObject` when checking if a value is an `Object`.
       */
      toBeObject(): void;
    }
  }
}

const passMessage = (received: unknown) => () =>
  matcherHint('.not.toBeObject', 'received', '') +
  '\n\n' +
  'Expected value to not be an object, received:\n' +
  `  ${printReceived(received)}`;

const failMessage = (received: unknown) => () =>
  matcherHint('.toBeObject', 'received', '') +
  '\n\n' +
  'Expected value to be an object, received:\n' +
  `  ${printReceived(received)}`;

export function toBeObject(expected: unknown): jest.CustomMatcherResult {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
