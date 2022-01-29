import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeBetween` when checking if a date occurs between `startDate` and `endDate`.
       * @param {Date} startDate
       * @param {Date} endDate
       */
      toBeBetween(startDate: Date, endDate: Date): R;
    }

    interface Expect {
      /**
       * Use `.toBeBetween` when checking if a date occurs between `startDate` and `endDate`.
       * @param {Date} startDate
       * @param {Date} endDate
       */
      toBeBetween(startDate: Date, endDate: Date): void;
    }
  }
}

const passMessage = (received: any, startDate: Date, endDate: Date) => () =>
  matcherHint('.not.toBeBetween', 'received', '') +
  '\n\n' +
  `Expected date to be between ${printReceived(startDate)} and ${printReceived(endDate)} but received:\n` +
  `  ${printReceived(received)}`;

const failMessage = (received: any, startDate: Date, endDate: Date) => () =>
  matcherHint('.toBeBetween', 'received', '') +
  '\n\n' +
  `Expected date to be between ${printReceived(startDate)} and ${printReceived(endDate)} but received:\n` +
  `  ${printReceived(received)}`;

export function toBeBetween(received: any, startDate: Date, endDate: Date): jest.CustomMatcherResult {
  const pass = predicate(received, startDate, endDate);
  if (pass) {
    return { pass: true, message: passMessage(received, startDate, endDate) };
  }

  return { pass: false, message: failMessage(received, startDate, endDate) };
}
