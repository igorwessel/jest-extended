/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeArray` when checking if a value is an `Array`.
       */
      toBeArray(): R;
    }
    interface Expect {
      /**
       * Use `.toBeArray` when checking if a value is an `Array`.
       */
      toBeArray(): void;
    }
  }
}
export declare function toBeArray(expected: any): jest.CustomMatcherResult;
