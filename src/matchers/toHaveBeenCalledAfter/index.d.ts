/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Use `.toHaveBeenCalledAfter` when checking if a `Mock` was called after another `Mock`.
       *
       * Note: Required Jest version >=23
       *
       * @param {MockInstance} mock
       */
      toHaveBeenCalledAfter(mock: jest.MockInstance<unknown, unknown[]>): R;
    }
    interface Expect {
      /**
       * Use `.toHaveBeenCalledAfter` when checking if a `Mock` was called after another `Mock`.
       *
       * Note: Required Jest version >=23
       *
       * @param {MockInstance} mock
       */
      toHaveBeenCalledAfter(mock: jest.MockInstance<unknown, unknown[]>): void;
    }
  }
}
export declare function toHaveBeenCalledAfter(
  firstMock: jest.MockInstance<unknown, unknown[]>,
  secondMock: jest.MockInstance<unknown, unknown[]>,
): jest.CustomMatcherResult;
