/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeOdd` when checking if a value is an odd `Number`.
       */
      toBeOdd(): R;
    }
    interface Expect {
      /**
       * Use `.toBeOdd` when checking if a value is an odd `Number`.
       */
      toBeOdd(): void;
    }
  }
}
export declare function toBeOdd(expected: number | string): jest.CustomMatcherResult;
