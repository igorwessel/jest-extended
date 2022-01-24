/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeNil` when checking a value is `null` or `undefined`.
       */
      toBeNil(): R;
    }
    interface Expect {
      /**
       * Use `.toBeNil` when checking a value is `null` or `undefined`.
       */
      toBeNil(): void;
    }
  }
}
export declare function toBeNil(received: any): jest.CustomMatcherResult;
