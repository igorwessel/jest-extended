import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeHexadecimal` when checking if a value is a valid HTML hex color.
       */
      toBeHexadecimal(): R;
    }
    interface Expect {
      /**
       * Use `.toBeHexadecimal` when checking if a value is a valid HTML hex color.
       */
      toBeHexadecimal(): void;
    }
  }
}

const passMessage = (received: any) => () =>
  matcherHint('.not.toBeHexadecimal', 'received', '') +
  '\n\n' +
  'Expected value to not be a hexadecimal, received:\n' +
  `  ${printReceived(received)}`;

const failMessage = (received: any) => () =>
  matcherHint('.toBeHexadecimal', 'received', '') +
  '\n\n' +
  'Expected value to be a hexadecimal, received:\n' +
  `  ${printReceived(received)}`;

export function toBeHexadecimal(expected: any): jest.CustomMatcherResult {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
