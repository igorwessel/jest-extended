import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use .toBeEmpty when checking if a String '', Array [] or Object {} is empty.
       */
      toBeEmpty(): R;
    }

    interface Expect {
      /**
       * Use .toBeEmpty when checking if a String '', Array [] or Object {} is empty.
       */
      toBeEmpty(): void;
    }
  }
}

const passMessage = (received: any) => () =>
  matcherHint('.not.toBeEmpty', 'received', '') +
  '\n\n' +
  'Expected value to not be empty received:\n' +
  `  ${printReceived(received)}`;

const failMessage = (received: any) => () =>
  matcherHint('.toBeEmpty', 'received', '') +
  '\n\n' +
  'Expected value to be empty received:\n' +
  `  ${printReceived(received)}`;

export function toBeEmpty(expected: any): jest.CustomMatcherResult {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
