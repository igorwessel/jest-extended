import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toStartWith` when checking if a `String` starts with a given `String` prefix.
       *
       * @param {String} prefix
       */
      toStartWith(prefix: string): R;
    }
    interface Expect {
      /**
       * Use `.toStartWith` when checking if a `String` starts with a given `String` prefix.
       *
       * @param {String} prefix
       */
      toStartWith(prefix: string): void;
    }
  }
}

const passMessage = (string: string, prefix: string) => () =>
  matcherHint('.not.toStartWith') +
  '\n\n' +
  'Expected string to not start with:\n' +
  `  ${printExpected(prefix)}\n` +
  'Received:\n' +
  `  ${printReceived(string)}`;

const failMessage = (string: string, prefix: string) => () =>
  matcherHint('.toStartWith') +
  '\n\n' +
  'Expected string to start with:\n' +
  `  ${printExpected(prefix)}\n` +
  'Received:\n' +
  `  ${printReceived(string)}`;

export function toStartWith(string: string, prefix: string): jest.CustomMatcherResult {
  const pass = predicate(prefix, string);
  if (pass) {
    return { pass: true, message: passMessage(prefix, string) };
  }

  return { pass: false, message: failMessage(prefix, string) };
}
