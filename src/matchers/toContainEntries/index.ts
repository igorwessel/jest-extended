import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Use `.toContainEntries` when checking if an object contains all of the provided entries.
       *
       * @param {Array.<Array.<keyof T, T[keyof T]>>} entries
       */
      toContainEntries(entries: Array<[keyof T, T[keyof T]]>): R;
    }
    interface Expect {
      /**
       * Use `.toContainEntries` when checking if an object contains all of the provided entries.
       *
       * @param {Array.<Array.<keyof E, E[keyof E]>>} entries
       */
      toContainEntries<E = any>(entries: Array<[keyof E, E[keyof E]]>): void;
    }
  }
}

const passMessage =
  <T = {}>(actual: T, expected: Array<[keyof T, T[keyof T]]>) =>
  () =>
    matcherHint('.not.toContainEntries') +
    '\n\n' +
    'Expected object to not contain all of the given entries:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

const failMessage =
  <T = {}>(actual: T, expected: Array<[keyof T, T[keyof T]]>) =>
  () =>
    matcherHint('.toContainEntries') +
    '\n\n' +
    'Expected object to contain all of the given entries:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

export function toContainEntries<T = {}>(actual: T, expected: Array<[keyof T, T[keyof T]]>): jest.CustomMatcherResult {
  const pass = predicate(actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(actual, expected) };
  }

  return { pass: false, message: failMessage(actual, expected) };
}
