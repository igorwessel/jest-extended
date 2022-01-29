import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toPartiallyContain` when checking if any array value matches the partial member.
       * @param {*} member
       */
      toPartiallyContain<E = any>(member: E): any;
    }
    interface Expect {
      /**
       * Use `.toPartiallyContain` when checking if any array value matches the partial member.
       * @param {*} member
       */
      toPartiallyContain<E = any>(member: E): any;
    }
  }
}

const passMessage =
  <E = any>(actual: any[], expected: E) =>
  () =>
    matcherHint('.not.toPartiallyContain') +
    '\n\n' +
    'Expected array not to partially contain:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

const failMessage =
  <E = any>(actual: any[], expected: E) =>
  () =>
    matcherHint('.toPartiallyContain') +
    '\n\n' +
    'Expected array to partially contain:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

export function toPartiallyContain<E = any>(actual: { [key: string]: E }[], expected: E): jest.CustomMatcherResult {
  const pass = predicate(actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(actual, expected) };
  }

  return { pass: false, message: failMessage(actual, expected) };
}
