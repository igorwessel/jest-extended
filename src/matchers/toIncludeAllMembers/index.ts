import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toIncludeAllMembers` when checking if an `Array` contains all of the same members of a given set.
       * @param {Array.<*>} members
       */
      toIncludeAllMembers<E = any>(members: E[]): R;
    }
    interface Expect {
      /**
       * Use `.toIncludeAllMembers` when checking if an `Array` contains all of the same members of a given set.
       * @param {Array.<*>} members
       */
      toIncludeAllMembers<E = any>(members: E[]): void;
    }
  }
}
const passMessage = (actual: any[], expected: any[]) => () =>
  matcherHint('.not.toIncludeAllMembers') +
  '\n\n' +
  'Expected list to not have all of the following members:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

const failMessage = (actual: any[], expected: any[]) => () =>
  matcherHint('.toIncludeAllMembers') +
  '\n\n' +
  'Expected list to have all of the following members:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

export function toIncludeAllMembers(actual: any[], expected: any[]): jest.CustomMatcherResult {
  const pass = predicate(actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(actual, expected) };
  }
  return { pass: false, message: failMessage(actual, expected) };
}
