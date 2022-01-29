import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Use .toBeOneOf when checking if a value is a member of a given Array.
       * @param {Array.<*>} members
       */
      toBeOneOf(members: T[]): R;
    }
    interface Expect {
      /**
       * Use .toBeOneOf when checking if a value is a member of a given Array.
       * @param {Array.<*>} members
       */
      toBeOneOf<E = any>(members: E[]): void;
    }
  }
}

const passMessage =
  <T>(item: T, list: T[]) =>
  () =>
    matcherHint('.not.toBeOneOf', 'item', 'list') +
    '\n\n' +
    'Expected value to not be in list:\n' +
    `  ${printExpected(list)}\n` +
    'Received:\n' +
    `  ${printReceived(item)}`;

const failMessage =
  <T>(item: T, list: T[]) =>
  () =>
    matcherHint('.toBeOneOf', 'item', 'list') +
    '\n\n' +
    'Expected value to be in list:\n' +
    `  ${printExpected(list)}\n` +
    'Received:\n' +
    `  ${printReceived(item)}`;

export function toBeOneOf<T>(item: T, list: T[]): jest.CustomMatcherResult {
  const pass = predicate<T>(item, list);
  if (pass) {
    return { pass: true, message: passMessage(item, list) };
  }

  return { pass: false, message: failMessage(item, list) };
}
