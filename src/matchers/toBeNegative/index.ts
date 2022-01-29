import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeNegative` when checking if a value is a negative `Number`.
       */
      toBeNegative(): R;
    }
    interface Expect {
      /**
       * Use `.toBeNegative` when checking if a value is a negative `Number`.
       */
      toBeNegative(): void;
    }
  }
}

const passMessage = (received: any) => () =>
  matcherHint('.not.toBeNegative', 'received', '') +
  '\n\n' +
  'Expected value to not be a negative number received:\n' +
  `  ${printReceived(received)}`;

const failMessage = (received: any) => () =>
  matcherHint('.toBeNegative', 'received', '') +
  '\n\n' +
  'Expected value to be a negative number received:\n' +
  `  ${printReceived(received)}`;

export function toBeNegative(expected: any): jest.CustomMatcherResult {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
