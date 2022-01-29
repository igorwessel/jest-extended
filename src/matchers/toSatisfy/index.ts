import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toSatisfy` when you want to use a custom matcher by supplying a predicate function that returns a `Boolean`.
       * @param {Function} predicate
       */
      toSatisfy<E = any>(predicate: (x: E) => boolean): R;
    }
    interface Expect {
      /**
       * Use `.toSatisfy` when you want to use a custom matcher by supplying a predicate function that returns a `Boolean`.
       * @param {Function} predicate
       */
      toSatisfy<E = any>(predicate: (x: E) => boolean): void;
    }
  }
}

const passMessage = (received: unknown, expected: unknown) => () =>
  matcherHint('.not.toSatisfy', 'received', '') +
  '\n\n' +
  'Expected value to not satisfy:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(received)}`;

const failMessage = (received: unknown, expected: unknown) => () =>
  matcherHint('.toSatisfy', 'received', '') +
  '\n\n' +
  'Expected value to satisfy:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(received)}`;

export function toSatisfy<A, B extends () => any>(actual: A, predicate: ReturnType<B>): jest.CustomMatcherResult {
  const pass = predicate(actual);
  if (pass) {
    return { pass: true, message: passMessage(actual, predicate) };
  }

  return { pass: false, message: failMessage(actual, predicate) };
}
