import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toIncludeAnyMembers` when checking if an `Array` contains any of the members of a given set.
       * @param {Array.<*>} members
       */
      toIncludeAnyMembers<E = any>(members: E[]): R;
    }
    interface Expect {
      /**
       * Use `.toIncludeAnyMembers` when checking if an `Array` contains any of the members of a given set.
       * @param {Array.<*>} members
       */
      toIncludeAnyMembers<E = any>(members: E[]): void;
    }
  }
}

const passMessage = (actual: any[], expected: any[]) => () =>
  matcherHint('.not.toIncludeAnyMembers') +
  '\n\n' +
  'Expected list to not include any of the following members:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

const failMessage = (actual: any[], expected: any[]) => () =>
  matcherHint('.toIncludeAnyMembers') +
  '\n\n' +
  'Expected list to include any of the following members:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

export function toIncludeAnyMembers(actual: any[], expected: any[]): jest.CustomMatcherResult {
  const pass = predicate(actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(actual, expected) };
  }

  return { pass: false, message: failMessage(actual, expected) };
}
