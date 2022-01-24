/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeObject` when checking if a value is an `Object`.
       */
      toBeObject(): R;
    }
    interface Expect {
      /**
       * Use `.toBeObject` when checking if a value is an `Object`.
       */
      toBeObject(): void;
    }
  }
}
export declare function toBeObject(expected: unknown): jest.CustomMatcherResult;
