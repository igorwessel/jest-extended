import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toSatisfyAll` when you want to use a custom matcher by supplying a predicate function that returns a `Boolean` for all values in an array.
       * @param {Function} predicate
       */
      toSatisfyAll<E = any>(predicate: (x: E) => boolean): R;
    }
    interface Expect {
      /**
       * Use `.toSatisfyAll` when you want to use a custom matcher by supplying a predicate function that returns a `Boolean` for all values in an array.
       * @param {Function} predicate
       */
      toSatisfyAll<E = any>(predicate: (x: E) => boolean): void;
    }
  }
}

const passMessage =
  <A>(actual: any[], expected: A) =>
  () =>
    matcherHint('.not.toSatisfyAll') +
    '\n\n' +
    'Expected array to not satisfy predicate for all values:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

const failMessage =
  <A>(actual: any[], expected: A) =>
  () =>
    matcherHint('.toSatisfyAll') +
    '\n\n' +
    'Expected array to satisfy predicate for all values:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

export function toSatisfyAll<B extends () => any>(actual: any[], expected: ReturnType<B>): jest.CustomMatcherResult {
  const pass = predicate(actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(actual, expected) };
  }

  return { pass: false, message: failMessage(actual, expected) };
}
