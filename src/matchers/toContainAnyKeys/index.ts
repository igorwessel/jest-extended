import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Use `.toContainAnyKeys` when checking if an object contains at least one of the provided keys.
       *
       * @param {Array.<String>} keys
       */
      toContainAnyKeys(keys: Array<keyof T>): R;
    }
    interface Expect {
      /**
       * Use `.toContainAnyKeys` when checking if an object contains at least one of the provided keys.
       *
       * @param {Array.<String>} keys
       */
      toContainAnyKeys<E = any>(keys: Array<keyof E | string>): void;
    }
  }
}

const passMessage =
  <T extends {}>(actual: T, expected: Array<keyof T>) =>
  () =>
    matcherHint('.not.toContainAnyKeys') +
    '\n\n' +
    'Expected object not to contain any of the following keys:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

const failMessage =
  <T extends {}>(actual: T, expected: Array<keyof T>) =>
  () =>
    matcherHint('.toContainValue') +
    '\n\n' +
    'Expected object to contain any of the following keys:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

export function toContainAnyKeys<T extends {}>(actual: T, expected: Array<keyof T>): jest.CustomMatcherResult {
  const pass = predicate(actual, expected);

  return {
    pass: pass,
    message: pass ? passMessage(actual, expected) : failMessage(actual, expected),
  };
}
