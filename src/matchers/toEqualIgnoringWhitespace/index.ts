import { EXPECTED_COLOR, matcherHint } from 'jest-matcher-utils';
import predicate from './predicate';
import { printExpected, printReceived } from './print-util';
import type { Diff } from 'jest-diff';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toEqualIgnoringWhitespace` when checking if a `String` is equal (===) to given `String` ignoring white-space.
       *
       * @param {String} string
       */
      toEqualIgnoringWhitespace(string: string): any;
    }
    interface Expect {
      /**
       * Use `.toEqualIgnoringWhitespace` when checking if a `String` is equal (===) to given `String` ignoring white-space.
       *
       * @param {String} string
       */
      toEqualIgnoringWhitespace(string: string): any;
    }
  }
}

const passMessage = (expected: string) => () =>
  matcherHint('.not.toEqualIgnoringWhitespace') +
  '\n\n' +
  'Expected values to not be equal while ignoring white-space (using ===):\n' +
  `Expected: not  ${EXPECTED_COLOR(expected)}\n\n`;

const failMessage = (diff: Diff[]) => () =>
  matcherHint('.toEqualIgnoringWhitespace') +
  '\n\n' +
  'Expected values to be equal while ignoring white-space (using ===):\n' +
  `Expected:\n  ${printExpected(diff)}\n\n` +
  `Received:\n  ${printReceived(diff)}`;

export function toEqualIgnoringWhitespace(received: string, expected: string): jest.CustomMatcherResult {
  const { pass, diff } = predicate(received, expected);

  return {
    pass,
    message: pass ? passMessage(expected) : failMessage(diff),
  };
}
