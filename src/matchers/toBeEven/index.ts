import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeEven` when checking if a value is an even `Number`.
       */
      toBeEven(): R;
    }
    interface Expect {
      /**
       * Use `.toBeEven` when checking if a value is an even `Number`.
       */
      toBeEven(): void;
    }
  }
}

const passMessage = (received: any) => () =>
  matcherHint('.not.toBeEven', 'received', '') +
  '\n\n' +
  'Expected value to not be an even number received:\n' +
  ` ${printReceived(received)}`;

const failMessage = (received: any) => () =>
  matcherHint('.toBeEven', 'received', '') +
  '\n\n' +
  'Expected value to be an even number received:\n' +
  ` ${printReceived(received)}`;

export function toBeEven(expected: number): jest.CustomMatcherResult {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
