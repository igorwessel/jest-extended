import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Use `.toContainAllEntries` when checking if an object only contains all of the provided entries.
       *
       * @param {Array.<Array.<keyof E, E[keyof E]>>} entries
       */
      toContainAllEntries(entries: Array<[keyof T, T[keyof T]]>): R;
    }
    interface Expect {
      /**
       * Use `.toContainAllEntries` when checking if an object only contains all of the provided entries.
       *
       * @param {Array.<Array.<keyof E, E[keyof E]>>} entries
       */
      toContainAllEntries<E = any>(entries: Array<[keyof E, E[keyof E]]>): void;
    }
  }
}

const passMessage = (actual: {}, expected: any[]) => () =>
  matcherHint('.not.toContainAllEntries') +
  '\n\n' +
  'Expected object to not only contain all of the given entries:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

const failMessage = (actual: {}, expected: any[]) => () =>
  matcherHint('.toContainAllEntries') +
  '\n\n' +
  'Expected object to only contain all of the given entries:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

export function toContainAllEntries(actual: {}, expected: any[]): jest.CustomMatcherResult {
  const pass = predicate(actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(actual, expected) };
  }

  return { pass: false, message: failMessage(actual, expected) };
}
