import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeFunction` when checking if a value is a `Function`.
       */
      toBeFunction(): R;
    }
    interface Expect {
      /**
       * Use `.toBeFunction` when checking if a value is a `Function`.
       */
      toBeFunction(): void;
    }
  }
}

const passMessage = (received: any) => () =>
  matcherHint('.not.toBeFunction', 'received', '') +
  '\n\n' +
  'Expected value to not be a function, received:\n' +
  `  ${printReceived(received)}`;

const failMessage = (received: any) => () =>
  matcherHint('.toBeFunction', 'received', '') +
  '\n\n' +
  'Expected to receive a function, received:\n' +
  `  ${printReceived(received)}`;

export function toBeFunction(expected: any): jest.CustomMatcherResult {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
