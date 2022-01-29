import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeTrue` when checking a value is equal (===) to `true`.
       */
      toBeTrue(): R;
    }
    interface Expect {
      /**
       * Use `.toBeTrue` when checking a value is equal (===) to `true`.
       */
      toBeTrue(): any;
    }
  }
}

const passMessage = (received: boolean) => () =>
  matcherHint('.not.toBeTrue', 'received', '') +
  '\n\n' +
  'Expected value to not be true received:\n' +
  `  ${printReceived(received)}`;

const failMessage = (received: boolean) => () =>
  matcherHint('.toBeTrue', 'received', '') +
  '\n\n' +
  'Expected value to be true:\n' +
  `  ${printExpected(true)}\n` +
  'Received:\n' +
  `  ${printReceived(received)}`;

export function toBeTrue(expected: boolean): jest.CustomMatcherResult {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
