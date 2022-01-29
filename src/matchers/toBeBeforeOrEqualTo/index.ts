import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeBeforeOrEqualTo` when checking if a date equals to or occurs before `date`.
       * @param {Date} date
       */
      toBeBeforeOrEqualTo(date: Date): R;
    }

    interface Expect {
      /**
       * Use `.toBeBeforeOrEqualTo` when checking if a date equals to or occurs before `date`.
       * @param {Date} date
       */
      toBeBeforeOrEqualTo(date: Date): void;
    }
  }
}

const passMessage = (received: Date, before: Date) => () =>
  matcherHint('.not.toBeBeforeOrEqualTo', 'received', '') +
  '\n\n' +
  `Expected date to be before or equal to ${printReceived(before)} but received:\n` +
  `  ${printReceived(received)}`;

const failMessage = (received: Date, before: Date) => () =>
  matcherHint('.toBeBeforeOrEqualTo', 'received', '') +
  '\n\n' +
  `Expected date to be before or equal to ${printReceived(before)} but received:\n` +
  `  ${printReceived(received)}`;

export function toBeBeforeOrEqualTo(received: Date, before: Date): jest.CustomMatcherResult {
  const pass = predicate(received, before);
  if (pass) {
    return { pass: true, message: passMessage(received, before) };
  }

  return { pass: false, message: failMessage(received, before) };
}
