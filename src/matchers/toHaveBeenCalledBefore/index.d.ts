/// <reference types="jest" />
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
export declare function toHaveBeenCalledBefore(
  firstMock: jest.MockInstance<unknown, unknown[]>,
  secondMock: jest.MockInstance<unknown, unknown[]>,
): jest.CustomMatcherResult;
