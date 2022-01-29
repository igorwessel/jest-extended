import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toIncludeAllPartialMembers` when checking if an `Array` contains all of the same partial members of a given set.
       * @param {Array.<*>} members
       */
      toIncludeAllPartialMembers<E = any>(members: E[]): R;
    }
    interface Expect {
      /**
       * Use `.toIncludeAllPartialMembers` when checking if an `Array` contains all of the same partial members of a given set.
       * @param {Array.<*>} members
       */
      toIncludeAllPartialMembers<E = any>(members: E[]): void;
    }
  }
}

const passMessage = (actual: any[], expected: any[]) => () =>
  matcherHint('.not.toIncludeAllPartialMembers') +
  '\n\n' +
  'Expected list to not have all of the following partial members:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

const failMessage = (actual: any[], expected: any[]) => () =>
  matcherHint('.toIncludeAllPartialMembers') +
  '\n\n' +
  'Expected list to have all of the following partial members:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

export function toIncludeAllPartialMembers(actual: any[], expected: any[]): jest.CustomMatcherResult {
  const pass = predicate(actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(actual, expected) };
  }

  return { pass: false, message: failMessage(actual, expected) };
}
