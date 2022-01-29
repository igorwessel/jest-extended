import { matcherHint, printReceived, printWithType } from 'jest-matcher-utils';

import { isJestMockOrSpy } from '../../utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toHaveBeenCalledOnce` to check if a `Mock` was called exactly one time.
       */
      toHaveBeenCalledOnce(): R;
    }
    interface Expect {
      /**
       * Use `.toHaveBeenCalledOnce` to check if a `Mock` was called exactly one time.
       */
      toHaveBeenCalledOnce(): void;
    }
  }
}

const passMessage = () => () =>
  matcherHint('.not.toHaveBeenCalledOnce') +
  '\n\n' +
  'Expected mock function to have been called any amount of times but one, but it was called exactly once.';

const failMessage = (mockFn: jest.MockInstance<unknown, unknown[]>) => () => {
  return (
    matcherHint('.toHaveBeenCalledOnce') +
    '\n\n' +
    'Expected mock function to have been called exactly once, but it was called:\n' +
    `  ${printReceived(mockFn.mock.calls.length)} times`
  );
};

const mockCheckFailMessage = (value: jest.MockInstance<unknown, unknown[]>) => () => {
  return (
    matcherHint('.toHaveBeenCalledAfter') +
    '\n\n' +
    `Matcher error: ${printReceived('received')} must be a mock or spy function` +
    '\n\n' +
    printWithType('Received', value, printReceived)
  );
};

export function toHaveBeenCalledOnce(received: jest.MockInstance<unknown, unknown[]>): jest.CustomMatcherResult {
  if (!isJestMockOrSpy(received)) {
    return { pass: false, message: mockCheckFailMessage(received) };
  }

  const pass = predicate(received);

  return {
    pass,
    message: pass ? passMessage() : failMessage(received),
  };
}
