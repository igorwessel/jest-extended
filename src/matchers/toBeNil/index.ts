import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeNil` when checking a value is `null` or `undefined`.
       */
      toBeNil(): R;
    }
    interface Expect {
      /**
       * Use `.toBeNil` when checking a value is `null` or `undefined`.
       */
      toBeNil(): void;
    }
  }
}

const passMessage = (received: any) => () =>
  matcherHint('.not.toBeNil', 'received', '') +
  '\n\n' +
  'Expected value not to be null or undefined, received:\n' +
  `  ${printReceived(received)}`;

const failMessage = (received: any) => () =>
  matcherHint('.toBeNil', 'received', '') +
  '\n\n' +
  'Expected value to be null or undefined, received:\n' +
  `  ${printReceived(received)}`;

export function toBeNil(received: any): jest.CustomMatcherResult {
  const pass = predicate(received);
  if (pass) {
    return { pass: true, message: passMessage(received) };
  }

  return { pass: false, message: failMessage(received) };
}
