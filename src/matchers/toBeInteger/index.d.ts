/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeInteger` when checking if a value is an integer.
       */
      toBeInteger(): R;
    }
    interface Expect {
      /**
       * Use `.toBeInteger` when checking if a value is an integer.
       */
      toBeInteger(): void;
    }
  }
}
export declare function toBeInteger(expected: any): jest.CustomMatcherResult;
