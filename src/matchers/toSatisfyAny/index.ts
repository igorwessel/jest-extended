import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toSatisfyAny` when you want to use a custom matcher by supplying a predicate function that returns `true` for any matching value in an array.
       * @param {Function} predicate
       */
      toSatisfyAny(predicate: (x: any) => boolean): R;
    }
    interface Expect {
      /**
       * Use `.toSatisfyAny` when you want to use a custom matcher by supplying a predicate function that returns `true` for any matching value in an array.
       * @param {Function} predicate
       */
      toSatisfyAny(predicate: (x: any) => boolean): void;
    }
  }
}

const passMessage =
  <A>(actual: any[], expected: A) =>
  () =>
    matcherHint('.not.toSatisfyAny') +
    '\n\n' +
    'Expected array to not satisfy predicate for any value:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

const failMessage =
  <A>(actual: any[], expected: A) =>
  () =>
    matcherHint('.toSatisfyAny') +
    '\n\n' +
    'Expected array to satisfy predicate for any values:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

export function toSatisfyAny<B extends () => any>(actual: any[], expected: ReturnType<B>): jest.CustomMatcherResult {
  const pass = predicate(actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(actual, expected) };
  }

  return { pass: false, message: failMessage(actual, expected) };
}
