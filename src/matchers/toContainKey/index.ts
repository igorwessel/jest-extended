import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Use `.toContainKey` when checking if an object contains the provided key.
       *
       * @param {String} key
       */
      toContainKey(key: keyof T): R;
    }
    interface Expect {
      /**
       * Use `.toContainKey` when checking if an object contains the provided key.
       *
       * @param {String} key
       */
      toContainKey(key: string): void;
    }
  }
}

const passMessage =
  <T = {}>(actual: T, expected: keyof T) =>
  () =>
    matcherHint('.not.toContainKey') +
    '\n\n' +
    'Expected object to not contain key:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

const failMessage =
  <T = {}>(actual: T, expected: keyof T) =>
  () =>
    matcherHint('.toContainKey') +
    '\n\n' +
    'Expected object to contain key:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

export function toContainKey<T = {}>(actual: T, expected: keyof T): jest.CustomMatcherResult {
  const pass = predicate(actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(actual, expected) };
  }

  return { pass: false, message: failMessage(actual, expected) };
}
