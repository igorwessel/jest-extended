import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeAfterOrEqualTo` when checking if a date equals to or occurs after `date`.
       * @param {Date} date
       */
      toBeAfterOrEqualTo(date: Date): R;
    }

    interface Expect {
      /**
       * Use `.toBeAfterOrEqualTo` when checking if a date equals to or occurs after `date`.
       * @param {Date} date
       */
      toBeAfterOrEqualTo(date: Date): void;
    }
  }
}

const passMessage = (received: any, after: Date) => () =>
  matcherHint('.not.toBeAfterOrEqualTo', 'received', '') +
  '\n\n' +
  `Expected date to be after or equal to ${printReceived(after)} but received:\n` +
  `  ${printReceived(received)}`;

const failMessage = (received: any, after: Date) => () =>
  matcherHint('.toBeAfterOrEqualTo', 'received', '') +
  '\n\n' +
  `Expected date to be after or equal to ${printReceived(after)} but received:\n` +
  `  ${printReceived(received)}`;

export function toBeAfterOrEqualTo(received: any, after: Date): jest.CustomMatcherResult {
  const pass = predicate(received, after);
  if (pass) {
    return { pass: true, message: passMessage(received, after) };
  }

  return { pass: false, message: failMessage(received, after) };
}
