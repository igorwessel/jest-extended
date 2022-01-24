/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeEmptyObject` when checking if a value is an empty `Object`.
       */
      toBeEmptyObject(): R;
    }
    interface Expect {
      /**
       * Use `.toBeEmptyObject` when checking if a value is an empty `Object`.
       */
      toBeEmptyObject(): void;
    }
  }
}
export declare function toBeEmptyObject(expected: any): jest.CustomMatcherResult;
