import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeSymbol` when checking if a value is a `Symbol`.
       */
      toBeSymbol(): R;
    }
    interface Expect {
      /**
       * Use `.toBeSymbol` when checking if a value is a `Symbol`.
       */
      toBeSymbol(): void;
    }
  }
}

const passMessage = (received: symbol) => () =>
  matcherHint('.not.toBeSymbol', 'received', '') +
  '\n\n' +
  'Expected value to not be a symbol, received:\n' +
  `  ${printReceived(received)}`;

const failMessage = (received: symbol) => () =>
  matcherHint('.toBeSymbol', 'received', '') +
  '\n\n' +
  'Expected to receive a symbol, received:\n' +
  `  ${printReceived(received)}`;

export function toBeSymbol(expected: symbol): jest.CustomMatcherResult {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
