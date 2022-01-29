import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toContainValues` when checking if an object contains all of the provided values.
       *
       * @param {Array.<*>} values
       */
      toContainValues<E = any>(values: E[]): R;
    }
    interface Expect {
      /**
       * Use `.toContainValues` when checking if an object contains all of the provided values.
       *
       * @param {Array.<*>} values
       */
      toContainValues<E = any>(values: E[]): void;
    }
  }
}

const passMessage =
  <E>(actual: {}, expected: E[]) =>
  () =>
    matcherHint('.not.toContainValues') +
    '\n\n' +
    'Expected object to not contain all values:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

const failMessage =
  <E>(actual: {}, expected: E[]) =>
  () =>
    matcherHint('.toContainValues') +
    '\n\n' +
    'Expected object to contain all values:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

export function toContainValues<E>(actual: {}, expected: E[]): jest.CustomMatcherResult {
  const pass = predicate(actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(actual, expected) };
  }

  return { pass: false, message: failMessage(actual, expected) };
}
