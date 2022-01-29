import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Use `.toContainAnyValues` when checking if an object contains at least one of the provided values.
       *
       * @param {Array.<*>} values
       */
      toContainAnyValues(values: Array<T[keyof T]>): R;
    }
    interface Expect {
      /**
       * Use `.toContainAnyValues` when checking if an object contains at least one of the provided values.
       *
       * @param {Array.<*>} values
       */
      toContainAnyValues<E = any>(values: Array<E[keyof E]>): void;
    }
  }
}

const passMessage = (actual: {}, expected: any[]) => () =>
  matcherHint('.not.toContainAnyValues') +
  '\n\n' +
  'Expected object to not contain any of the following values:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

const failMessage = (actual: {}, expected: any[]) => () =>
  matcherHint('.toContainAnyValues') +
  '\n\n' +
  'Expected object to contain any of the following values:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

export function toContainAnyValues(actual: {}, expected: any[]): jest.CustomMatcherResult {
  const pass = predicate(actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(actual, expected) };
  }

  return { pass: false, message: failMessage(actual, expected) };
}
