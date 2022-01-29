import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeExtensible` when checking if an object is extensible.
       */
      toBeExtensible(): R;
    }
    interface Expect {
      /**
       * Use `.toBeExtensible` when checking if an object is extensible.
       */
      toBeExtensible(): void;
    }
  }
}

const passMessage = (received: any) => () => {
  return (
    matcherHint('.not.toBeExtensible', 'received', '') +
    '\n\n' +
    'Expected value to not be extensible received:\n' +
    `  ${printExpected(received)}\n`
  );
};

const failMessage = (received: any) => () => {
  return (
    matcherHint('.toBeExtensible', 'received', '') +
    '\n\n' +
    'Expected value to be extensible received:\n' +
    `  ${printExpected(received)}`
  );
};

export function toBeExtensible(expected: any): jest.CustomMatcherResult {
  const pass = predicate(expected);
  return {
    pass,
    message: pass ? passMessage(expected) : failMessage(expected),
  };
}
