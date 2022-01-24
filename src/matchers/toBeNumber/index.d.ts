/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeNumber` when checking if a value is a `Number`.
       */
      toBeNumber(): R;
    }
    interface Expect {
      /**
       * Use `.toBeNumber` when checking if a value is a `Number`.
       */
      toBeNumber(): void;
    }
  }
}
export declare function toBeNumber(expected: unknown): jest.CustomMatcherResult;
