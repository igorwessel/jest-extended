import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toIncludeRepeated` when checking if a `String` includes the given `String` substring the correct number of times.
       *
       * @param {String} substring
       * @param {Number} times
       */
      toIncludeRepeated(substring: string, times: number): R;
    }
    interface Expect {
      /**
       * Use `.toIncludeRepeated` when checking if a `String` includes the given `String` substring the correct number of times.
       *
       * @param {String} substring
       * @param {Number} times
       */
      toIncludeRepeated(substring: string, times: number): void;
    }
  }
}

const passMessage = (actual: string, expected: string, occurrences: number) => () =>
  matcherHint('.not.toIncludeRepeated') +
  '\n\n' +
  `Expected string to not include repeated ${occurrences} times:\n` +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

const failMessage = (actual: string, expected: string, occurrences: number) => () =>
  matcherHint('.toIncludeRepeated') +
  '\n\n' +
  `Expected string to include repeated ${occurrences} times:\n` +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

export function toIncludeRepeated(actual: string, expected: string, occurrences: number): jest.CustomMatcherResult {
  const pass = predicate(actual, expected, occurrences);
  if (pass) {
    return { pass: true, message: passMessage(actual, expected, occurrences) };
  }

  return { pass: false, message: failMessage(actual, expected, occurrences) };
}
