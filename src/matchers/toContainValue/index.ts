import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Use `.toContainValue` when checking if an object contains the provided value.
       *
       * @param {*} value
       */
      toContainValue<E>(value: E): R;
    }
    interface Expect {
      /**
       * Use `.toContainValue` when checking if an object contains the provided value.
       *
       * @param {*} value
       */
      toContainValue<E>(value: E): void;
    }
  }
}

const passMessage =
  <T = {}>(actual: T, expected: T[keyof T]) =>
  () =>
    matcherHint('.not.toContainValue') +
    '\n\n' +
    'Expected object to not contain value:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

const failMessage =
  <T = {}>(actual: T, expected: T[keyof T]) =>
  () =>
    matcherHint('.toContainValue') +
    '\n\n' +
    'Expected object to contain value:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

export function toContainValue<T extends {}>(actual: T, expected: T[keyof T]): jest.CustomMatcherResult {
  const pass = predicate(actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(actual, expected) };
  }

  return { pass: false, message: failMessage(actual, expected) };
}
