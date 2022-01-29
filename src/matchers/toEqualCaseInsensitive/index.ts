import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';
import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toEqualCaseInsensitive` when checking if a string is equal (===) to another ignoring the casing of both strings.
       *
       * @param {String} string
       */
      toEqualCaseInsensitive(string: string): R;
    }
    interface Expect {
      /**
       * Use `.toEqualCaseInsensitive` when checking if a string is equal (===) to another ignoring the casing of both strings.
       *
       * @param {String} string
       */
      toEqualCaseInsensitive(string: string): void;
    }
  }
}

const passMessage = (received: string, expected: string) => () => {
  return (
    matcherHint('.not.toEqualCaseInsensitive') +
    '\n\n' +
    'Expected values to not be equal while ignoring case (using ===):\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(received)}`
  );
};

const failMessage = (received: string, expected: string) => () => {
  return (
    matcherHint('.toEqualCaseInsensitive') +
    '\n\n' +
    'Expected values to be equal while ignoring case (using ===):\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(received)}`
  );
};

export function toEqualCaseInsensitive(received: string, expected: string): jest.CustomMatcherResult {
  const pass = predicate(received, expected);

  return {
    pass,
    message: pass ? passMessage(received, expected) : failMessage(received, expected),
  };
}
