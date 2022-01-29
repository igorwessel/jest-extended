import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeBoolean` when checking if a value is a `Boolean`.
       */
      toBeBoolean(): R;
    }

    interface Expect {
      /**
       * Use `.toBeBoolean` when checking if a value is a `Boolean`.
       */
      toBeBoolean(): void;
    }
  }
}

const passMessage = (received: any) => () =>
  matcherHint('.not.toBeBoolean', 'received', '') +
  '\n\n' +
  'Expected value to not be of type boolean, received:\n' +
  `  ${printReceived(received)}`;

const failMessage = (received: any) => () =>
  matcherHint('.toBeBoolean', 'received', '') +
  '\n\n' +
  'Expected value to be of type boolean, received:\n' +
  `  ${printReceived(received)}`;

export function toBeBoolean(received: any): jest.CustomMatcherResult {
  const pass = predicate(received);
  if (pass) {
    return { pass: true, message: passMessage(received) };
  }

  return { pass: false, message: failMessage(received) };
}
