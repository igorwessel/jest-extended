import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBePositive` when checking if a value is a positive `Number`.
       */
      toBePositive(): R;
    }
    interface Expect {
      /**
       * Use `.toBePositive` when checking if a value is a positive `Number`.
       */
      toBePositive(): void;
    }
  }
}

const passMessage = (received: number) => () =>
  matcherHint('.not.toBePositive', 'received', '') +
  '\n\n' +
  'Expected value to not be positive received:\n' +
  `  ${printReceived(received)}`;

const failMessage = (received: number) => () =>
  matcherHint('.toBePositive', 'received', '') +
  '\n\n' +
  'Expected value to be positive received:\n' +
  `  ${printReceived(received)}`;

export function toBePositive(expected: number): jest.CustomMatcherResult {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
