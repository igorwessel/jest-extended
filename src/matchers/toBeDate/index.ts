import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeDate` when checking if a value is a `Date`.
       */
      toBeDate(): R;
    }
    interface Expect {
      /**
       * Use `.toBeDate` when checking if a value is a `Date`.
       */
      toBeDate(): void;
    }
  }
}

const passMessage = (received: any) => () =>
  matcherHint('.not.toBeDate', 'received', '') +
  '\n\n' +
  'Expected value to not be a date received:\n' +
  `  ${printReceived(received)}`;

const failMessage = (received: any) => () =>
  matcherHint('.toBeDate', 'received', '') +
  '\n\n' +
  'Expected value to be a date received:\n' +
  `  ${printReceived(received)}`;

export function toBeDate(expected: any): jest.CustomMatcherResult {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
