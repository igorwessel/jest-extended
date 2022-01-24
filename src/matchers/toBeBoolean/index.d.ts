/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeBoolean` when checking if a value is a `Boolean`.
       */
      toBeBoolean(): R;
    }
    interface Expect {
      /**
       * Use `.toBeBoolean` when checking if a value is a `Boolean`.
       */
      toBeBoolean(): void;
    }
  }
}
export declare function toBeBoolean(received: any): jest.CustomMatcherResult;
