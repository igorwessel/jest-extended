import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeFalse` when checking a value is equal (===) to `false`.
       */
      toBeFalse(): R;
    }
    interface Expect {
      /**
       * Use `.toBeFalse` when checking a value is equal (===) to `false`.
       */
      toBeFalse(): void;
    }
  }
}

const passMessage = (received: any) => () =>
  matcherHint('.not.toBeFalse', 'received', '') +
  '\n\n' +
  'Expected value to not be false received:\n' +
  `  ${printReceived(received)}`;

const failMessage = (received: any) => () =>
  matcherHint('.toBeFalse', 'received', '') +
  '\n\n' +
  'Expected value to be false:\n' +
  `  ${printExpected(false)}\n` +
  'Received:\n' +
  `  ${printReceived(received)}`;

export function toBeFalse(expected: any): jest.CustomMatcherResult {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
