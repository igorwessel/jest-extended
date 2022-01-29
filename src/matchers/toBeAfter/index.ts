import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeAfter` when checking if a date occurs after `date`.
       * @param {Date} date
       */
      toBeAfter(date: Date): R;
    }

    interface Expect {
      /**
       * Use `.toBeAfter` when checking if a date occurs after `date`.
       * @param {Date} date
       */
      toBeAfter(date: Date): void;
    }
  }
}

const passMessage = (received: any, after: Date) => () =>
  matcherHint('.not.toBeAfter', 'received', '') +
  '\n\n' +
  `Expected date to be after ${printReceived(after)} but received:\n` +
  `  ${printReceived(received)}`;

const failMessage = (received: any, after: Date) => () =>
  matcherHint('.toBeAfter', 'received', '') +
  '\n\n' +
  `Expected date to be after ${printReceived(after)} but received:\n` +
  `  ${printReceived(received)}`;

export function toBeAfter(received: any, after: Date): jest.CustomMatcherResult {
  const pass = predicate(received, after);
  if (pass) {
    return { pass: true, message: passMessage(received, after) };
  }

  return { pass: false, message: failMessage(received, after) };
}
