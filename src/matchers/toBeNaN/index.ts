import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeNaN` when checking a value is `NaN`.
       */
      toBeNaN(): R;
    }
    interface Expect {
      /**
       * Use `.toBeNaN` when checking a value is `NaN`.
       */
      toBeNaN(): void;
    }
  }
}

const passMessage = (received: any) => () =>
  matcherHint('.not.toBeNaN', 'received', '') +
  '\n\n' +
  'Expected value to be a number received:\n' +
  `  ${printReceived(received)}`;

const failMessage = (received: any) => () =>
  matcherHint('.toBeNaN', 'received', '') +
  '\n\n' +
  'Expected value to not be a number received:\n' +
  `  ${printReceived(received)}`;

export function toBeNaN(expected: any): jest.CustomMatcherResult {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
