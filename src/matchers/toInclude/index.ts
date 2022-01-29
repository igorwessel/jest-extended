import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toInclude` when checking if a `String` includes the given `String` substring.
       *
       * @param {String} substring
       */
      toInclude(substring: string): R;
    }
    interface Expect {
      /**
       * Use `.toInclude` when checking if a `String` includes the given `String` substring.
       *
       * @param {String} substring
       */
      toInclude(substring: string): void;
    }

    interface InverseAsymmetricMatchers {
      /**
       * Use `.toInclude` when checking if a `String` includes the given `String` substring.
       *
       * @param {String} substring
       */
      toInclude(substring: string): void;
    }
  }
}

const passMessage = (actual: string, expected: string) => () =>
  matcherHint('.not.toInclude') +
  '\n\n' +
  'Expected string to not include:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

const failMessage = (actual: string, expected: string) => () =>
  matcherHint('.toInclude') +
  '\n\n' +
  'Expected string to include:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

export function toInclude(actual: string, expected: string): jest.CustomMatcherResult {
  const pass = predicate(actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(actual, expected) };
  }

  return { pass: false, message: failMessage(actual, expected) };
}