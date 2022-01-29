import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Use `.toContainEntry` when checking if an object contains the provided entry.
       *
       * @param {Array.<[keyof T, T[keyof T]>} entry
       */
      toContainEntry(entry: [keyof T, T[keyof T]]): R;
    }
    interface Expect {
      /**
       * Use `.toContainEntry` when checking if an object contains the provided entry.
       *
       * @param {Array.<[keyof E, E[keyof E]>} entry
       */
      toContainEntry<E = any>(entry: [keyof E, E[keyof E]]): void;
    }
  }
}

const passMessage =
  <T = {}>(actual: T, expected: [keyof T, T[keyof T]]) =>
  () =>
    matcherHint('.not.toContainEntry') +
    '\n\n' +
    'Expected object to not contain entry:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

const failMessage =
  <T = {}>(actual: T, expected: [keyof T, T[keyof T]]) =>
  () =>
    matcherHint('.toContainEntry') +
    '\n\n' +
    'Expected object to contain entry:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

export function toContainEntry<T = {}>(actual: T, expected: [keyof T, T[keyof T]]): jest.CustomMatcherResult {
  const pass = predicate(actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(actual, expected) };
  }

  return { pass: false, message: failMessage(actual, expected) };
}
