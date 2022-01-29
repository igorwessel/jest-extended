import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeWithin` when checking if a number is in between the given bounds of: start (inclusive) and end (exclusive).
       *
       * @param {Number} start
       * @param {Number} end
       */
      toBeWithin(start: number, end: number): R;
    }
    interface Expect {
      /**
       * Use `.toBeWithin` when checking if a number is in between the given bounds of: start (inclusive) and end (exclusive).
       *
       * @param {Number} start
       * @param {Number} end
       */
      toBeWithin(start: number, end: number): any;
    }
  }
}

const passMessage = (number: number, start: number, end: number) => () =>
  matcherHint('.not.toBeWithin') +
  '\n\n' +
  'Expected number to not be within start (inclusive) and end (exclusive):\n' +
  `  start: ${printExpected(start)}  end: ${printExpected(end)}\n` +
  'Received:\n' +
  `  ${printReceived(number)}`;

const failMessage = (number: number, start: number, end: number) => () =>
  matcherHint('.toBeWithin') +
  '\n\n' +
  'Expected number to be within start (inclusive) and end (exclusive):\n' +
  `  start: ${printExpected(start)}  end: ${printExpected(end)}\n` +
  'Received:\n' +
  `  ${printReceived(number)}`;

export function toBeWithin(number: number, start: number, end: number): jest.CustomMatcherResult {
  const pass = predicate(number, start, end);
  if (pass) {
    return { pass: true, message: passMessage(number, start, end) };
  }

  return { pass: false, message: failMessage(number, start, end) };
}
