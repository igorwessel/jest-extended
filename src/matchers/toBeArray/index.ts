import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeArray` when checking if a value is an `Array`.
       */
      toBeArray(): R;
    }

    interface Expect {
      /**
       * Use `.toBeArray` when checking if a value is an `Array`.
       */
      toBeArray(): void;
    }
  }
}

const passMessage = (received: any) => () =>
  matcherHint('.not.toBeArray', 'received', '') +
  '\n\n' +
  'Expected value to not be an array received:\n' +
  `  ${printReceived(received)}`;

const failMessage = (received: any) => () =>
  matcherHint('.toBeArray', 'received', '') +
  '\n\n' +
  'Expected value to be an array received:\n' +
  `  ${printReceived(received)}`;

export function toBeArray(expected: any): jest.CustomMatcherResult {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
