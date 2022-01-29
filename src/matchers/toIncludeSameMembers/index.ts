import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toIncludeSameMembers` when checking if two arrays contain equal values, in any order.
       * @param {Array.<*>} members
       */
      toIncludeSameMembers<E = any>(members: E[]): R;
    }
    interface Expect {
      /**
       * Use `.toIncludeSameMembers` when checking if two arrays contain equal values, in any order.
       * @param {Array.<*>} members
       */
      toIncludeSameMembers<E = any>(members: E[]): void;
    }
  }
}

const passMessage = (actual: any[], expected: any[]) => () =>
  matcherHint('.not.toIncludeSameMembers') +
  '\n\n' +
  'Expected list to not exactly match the members of:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

const failMessage = (actual: any[], expected: any[]) => () =>
  matcherHint('.toIncludeSameMembers') +
  '\n\n' +
  'Expected list to have the following members and no more:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

export function toIncludeSameMembers(actual: any[], expected: any[]): jest.CustomMatcherResult {
  const pass = predicate(actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(actual, expected) };
  }
  return { pass: false, message: failMessage(actual, expected) };
}
