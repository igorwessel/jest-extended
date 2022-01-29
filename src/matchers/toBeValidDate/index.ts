import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeValidDate` when checking if a value is a `valid Date`.
       */
      toBeValidDate(): R;
    }
    interface Expect {
      /**
       * Use `.toBeValidDate` when checking if a value is a `valid Date`.
       */
      toBeValidDate(): any;
    }
  }
}

const passMessage = (received: Date) => () =>
  matcherHint('.not.toBeValidDate', 'received', '') +
  '\n\n' +
  'Expected value to not be a valid date received:\n' +
  `  ${printReceived(received)}`;

const failMessage = (received: Date) => () =>
  matcherHint('.toBeValidDate', 'received', '') +
  '\n\n' +
  'Expected value to be a valid date received:\n' +
  `  ${printReceived(received)}`;

export function toBeValidDate(expected: Date): jest.CustomMatcherResult {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
