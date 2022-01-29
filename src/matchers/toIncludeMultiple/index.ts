import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toIncludeMultiple` when checking if a `String` includes all of the given substrings.
       *
       * @param {Array.<String>} substring
       */
      toIncludeMultiple(substring: string[]): R;
    }
    interface Expect {
      /**
       * Use `.toIncludeMultiple` when checking if a `String` includes all of the given substrings.
       *
       * @param {Array.<String>} substring
       */
      toIncludeMultiple(substring: string[]): void;
    }
  }
}

const passMessage = (actual: string, expected: string[]) => () =>
  matcherHint('.not.toIncludeMultiple') +
  '\n\n' +
  'Expected string to not contain all substrings: \n' +
  `  ${printExpected(expected)}\n` +
  'Received: \n' +
  `  ${printReceived(actual)}`;

const failMessage = (actual: string, expected: string[]) => () =>
  matcherHint('.toIncludeMultiple') +
  '\n\n' +
  'Expected string to contain all substrings: \n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

export function toIncludeMultiple(actual: string, expected: string[]): jest.CustomMatcherResult {
  const pass = predicate(actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(actual, expected) };
  }

  return { pass: false, message: failMessage(actual, expected) };
}
