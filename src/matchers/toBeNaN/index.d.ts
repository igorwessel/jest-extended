/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeNaN` when checking a value is `NaN`.
       */
      toBeNaN(): R;
    }
    interface Expect {
      /**
       * Use `.toBeNaN` when checking a value is `NaN`.
       */
      toBeNaN(): void;
    }
  }
}
export declare function toBeNaN(expected: any): jest.CustomMatcherResult;
