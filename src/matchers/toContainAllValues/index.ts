import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Use `.toContainAllValues` when checking if an object only contains all of the provided values.
       *
       * @param {Array.<*>} values
       */
      toContainAllValues(values: Array<T[keyof T]>): R;
    }
    interface Expect {
      /**
       * Use `.toContainAllValues` when checking if an object only contains all of the provided values.
       *
       * @param {Array.<*>} values
       */
      toContainAllValues<E = any>(values: Array<E[keyof E]>): void;
    }
  }
}

const passMessage =
  <T = {}>(actual: T, expected: Array<T[keyof T]>) =>
  () =>
    matcherHint('.not.toContainAllValues') +
    '\n\n' +
    'Expected object to not contain all values:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

const failMessage =
  <T = {}>(actual: T, expected: Array<T[keyof T]>) =>
  () =>
    matcherHint('.toContainAllValues') +
    '\n\n' +
    'Expected object to contain all values:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

export function toContainAllValues<T = {}>(actual: T, expected: Array<T[keyof T]>): jest.CustomMatcherResult {
  const pass = predicate(actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(actual, expected) };
  }

  return { pass: false, message: failMessage(actual, expected) };
}
