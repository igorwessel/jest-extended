import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Use `.toContainKeys` when checking if an object has all of the provided keys.
       *
       * @param {Array.<String>} keys
       */
      toContainKeys(keys: string[]): R;
    }
    interface Expect {
      /**
       * Use `.toContainKeys` when checking if an object has all of the provided keys.
       *
       * @param {Array.<String>} keys
       */
      toContainKeys(keys: string[]): void;
    }
  }
}

const passMessage =
  <T = {}>(actual: T, expected: Array<keyof T>) =>
  () =>
    matcherHint('.not.toContainKeys') +
    '\n\n' +
    'Expected object to not contain all keys:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

const failMessage =
  <T = {}>(actual: T, expected: Array<keyof T>) =>
  () =>
    matcherHint('.toContainKeys') +
    '\n\n' +
    'Expected object to contain all keys:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

export function toContainKeys<T = {}>(actual: T, expected: Array<keyof T>): jest.CustomMatcherResult {
  const pass = predicate(actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(actual, expected) };
  }

  return { pass: false, message: failMessage(actual, expected) };
}
