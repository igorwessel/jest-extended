import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Use `.toContainAnyEntries` when checking if an object contains at least one of the provided entries.
       *
       * @param {Array.<Array.<keyof E, E[keyof E]>>} entries
       */
      toContainAnyEntries(entries: Array<[keyof T, T[keyof T]]>): R;
    }
    interface Expect {
      /**
       * Use `.toContainAnyEntries` when checking if an object contains at least one of the provided entries.
       *
       * @param {Array.<Array.<keyof E, E[keyof E]>>} entries
       */
      toContainAnyEntries<E = any>(entries: Array<[keyof E, E[keyof E]]>): void;
    }
  }
}

const passMessage =
  <T extends {}>(object: T, entries: Array<[keyof T, T[keyof T]]>) =>
  () =>
    matcherHint('.not.toContainAnyEntries') +
    '\n\n' +
    'Expected object to not contain any of the provided entries:\n' +
    `  ${printExpected(entries)}\n` +
    'Received:\n' +
    `  ${printReceived(object)}`;

const failMessage =
  <T extends {}>(object: T, entries: Array<[keyof T, T[keyof T]]>) =>
  () =>
    matcherHint('.toContainAnyEntries') +
    '\n\n' +
    'Expected object to contain any of the provided entries:\n' +
    `  ${printExpected(entries)}\n` +
    'Received:\n' +
    `  ${printReceived(object)}`;

export function toContainAnyEntries<T extends {}>(
  object: T,
  entries: Array<[keyof T, T[keyof T]]>,
): jest.CustomMatcherResult {
  const pass = predicate(object, entries);
  if (pass) {
    return { pass: true, message: passMessage(object, entries) };
  }
  return { pass: false, message: failMessage(object, entries) };
}
