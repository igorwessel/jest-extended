import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Use `.toContainAllKeys` when checking if an object only contains all of the provided keys.
       *
       * @param {Array.<String>} keys
       */
      toContainAllKeys(keys: Array<keyof T>): R;
    }
    interface Expect {
      /**
       * Use `.toContainAllKeys` when checking if an object only contains all of the provided keys.
       *
       * @param {Array.<String>} keys
       */
      toContainAllKeys<E = {}>(keys: Array<keyof E>): void;
    }
  }
}

const passMessage =
  <T extends {}>(actual: T, expected: Array<keyof T>) =>
  () =>
    matcherHint('.not.toContainAllKeys') +
    '\n\n' +
    'Expected object to not contain all keys:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(Object.keys(actual))}`;

const failMessage =
  <T extends {}>(actual: T, expected: Array<keyof T>) =>
  () =>
    matcherHint('.toContainAllKeys') +
    '\n\n' +
    'Expected object to contain all keys:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(Object.keys(actual))}`;

export function toContainAllKeys<T extends {}>(actual: T, expected: Array<keyof T>): jest.CustomMatcherResult {
  const pass = predicate(actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(actual, expected) };
  }

  return { pass: false, message: failMessage(actual, expected) };
}
