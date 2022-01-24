/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeTrue` when checking a value is equal (===) to `true`.
       */
      toBeTrue(): R;
    }
    interface Expect {
      /**
       * Use `.toBeTrue` when checking a value is equal (===) to `true`.
       */
      toBeTrue(): any;
    }
  }
}
export declare function toBeTrue(expected: boolean): jest.CustomMatcherResult;
