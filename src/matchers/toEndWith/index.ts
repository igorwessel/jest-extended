import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toEndWith` when checking if a `String` ends with a given `String` suffix.
       *
       * @param {String} suffix
       */
      toEndWith(suffix: string): R;
    }
    interface Expect {
      /**
       * Use `.toEndWith` when checking if a `String` ends with a given `String` suffix.
       *
       * @param {String} suffix
       */
      toEndWith(suffix: string): void;
    }
  }
}

const passMessage = (suffix: string, string: string) => () =>
  matcherHint('.not.toEndWith') +
  '\n\n' +
  'Expected string to not end with:\n' +
  `  ${printExpected(suffix)}\n` +
  'Received:\n' +
  `  ${printReceived(string)}`;

const failMessage = (suffix: string, string: string) => () =>
  matcherHint('.toEndWith') +
  '\n\n' +
  'Expected string to end with:\n' +
  `  ${printExpected(suffix)}\n` +
  'Received:\n' +
  `  ${printReceived(string)}`;

export function toEndWith(string: string, suffix: string): jest.CustomMatcherResult {
  const pass = predicate(suffix, string);
  if (pass) {
    return { pass: true, message: passMessage(suffix, string) };
  }

  return { pass: false, message: failMessage(suffix, string) };
}
