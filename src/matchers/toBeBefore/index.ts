import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeBefore` when checking if a date occurs before `date`.
       * @param {Date} date
       */
      toBeBefore(date: Date): R;
    }

    interface Expect {
      /**
       * Use `.toBeBefore` when checking if a date occurs before `date`.
       * @param {Date} date
       */
      toBeBefore(date: Date): void;
    }
  }
}

const passMessage = (received: Date, before: Date) => () =>
  matcherHint('.not.toBeBefore', 'received', '') +
  '\n\n' +
  `Expected date to be before ${printReceived(before)} but received:\n` +
  `  ${printReceived(received)}`;

const failMessage = (received: Date, before: Date) => () =>
  matcherHint('.toBeBefore', 'received', '') +
  '\n\n' +
  `Expected date to be before ${printReceived(before)} but received:\n` +
  `  ${printReceived(received)}`;

export function toBeBefore(received: Date, before: Date): jest.CustomMatcherResult {
  const pass = predicate(received, before);
  if (pass) {
    return { pass: true, message: passMessage(received, before) };
  }

  return { pass: false, message: failMessage(received, before) };
}
