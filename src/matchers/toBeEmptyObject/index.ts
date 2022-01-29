import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeEmptyObject` when checking if a value is an empty `Object`.
       */
      toBeEmptyObject(): R;
    }

    interface Expect {
      /**
       * Use `.toBeEmptyObject` when checking if a value is an empty `Object`.
       */
      toBeEmptyObject(): void;
    }
  }
}

const passMessage = (received: any) => () =>
  matcherHint('.not.toBeEmptyObject', 'received', '') +
  '\n\n' +
  'Expected value to not be an empty object, received:\n' +
  `  ${printReceived(received)}`;

const failMessage = (received: any) => () =>
  matcherHint('.toBeEmptyObject', 'received', '') +
  '\n\n' +
  'Expected value to be an empty object, received:\n' +
  `  ${printReceived(received)}`;

export function toBeEmptyObject(expected: any): jest.CustomMatcherResult {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
