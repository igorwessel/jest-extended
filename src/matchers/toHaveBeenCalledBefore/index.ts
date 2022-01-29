import { matcherHint, printExpected, printReceived, printWithType } from 'jest-matcher-utils';

import { isJestMockOrSpy } from '../../utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toHaveBeenCalledBefore` when checking if a `Mock` was called before another `Mock`.
       *
       * Note: Required Jest version >=23
       *
       * @param {MockInstance} mock
       */
      toHaveBeenCalledBefore(mock: jest.MockInstance<unknown, unknown[]>): R;
    }
    interface Expect {
      /**
       * Use `.toHaveBeenCalledBefore` when checking if a `Mock` was called before another `Mock`.
       *
       * Note: Required Jest version >=23
       *
       * @param {MockInstance} mock
       */
      toHaveBeenCalledBefore(mock: jest.MockInstance<unknown, unknown[]>): void;
    }
  }
}

const passMessage = (firstInvocationCallOrder: number[], secondInvocationCallOrder: number[]) => () =>
  matcherHint('.not.toHaveBeenCalledBefore') +
  '\n\n' +
  'Expected first mock to not have been called before, invocationCallOrder:\n' +
  `  ${printExpected(firstInvocationCallOrder)}\n` +
  'Received second mock with invocationCallOrder:\n' +
  `  ${printReceived(secondInvocationCallOrder)}`;

const failMessage = (firstInvocationCallOrder: number[], secondInvocationCallOrder: number[]) => () =>
  matcherHint('.toHaveBeenCalledBefore') +
  '\n\n' +
  'Expected first mock to have been called before, invocationCallOrder:\n' +
  `  ${printExpected(firstInvocationCallOrder)}\n` +
  'Received second mock with invocationCallOrder:\n' +
  `  ${printReceived(secondInvocationCallOrder)}`;

const mockCheckFailMessage = (value: jest.MockInstance<unknown, unknown[]>, isReceivedValue: boolean) => () => {
  const valueKind = isReceivedValue ? 'Received' : 'Expected';
  const valueKindPrintFunc = isReceivedValue ? printReceived : printExpected;

  return (
    matcherHint('.toHaveBeenCalledAfter') +
    '\n\n' +
    `Matcher error: ${valueKindPrintFunc(valueKind.toLowerCase())} must be a mock or spy function` +
    '\n\n' +
    printWithType(valueKind, value, valueKindPrintFunc)
  );
};

export function toHaveBeenCalledBefore(
  firstMock: jest.MockInstance<unknown, unknown[]>,
  secondMock: jest.MockInstance<unknown, unknown[]>,
): jest.CustomMatcherResult {
  if (!isJestMockOrSpy(firstMock)) {
    return { pass: false, message: mockCheckFailMessage(firstMock, true) };
  }

  if (!isJestMockOrSpy(secondMock)) {
    return { pass: false, message: mockCheckFailMessage(secondMock, false) };
  }

  const firstInvocationCallOrder = firstMock.mock.invocationCallOrder;
  const secondInvocationCallOrder = secondMock.mock.invocationCallOrder;
  const pass = predicate(firstInvocationCallOrder, secondInvocationCallOrder);
  if (pass) {
    return { pass: true, message: passMessage(firstInvocationCallOrder, secondInvocationCallOrder) };
  }

  return { pass: false, message: failMessage(firstInvocationCallOrder, secondInvocationCallOrder) };
}