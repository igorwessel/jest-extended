/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeFalse` when checking a value is equal (===) to `false`.
       */
      toBeFalse(): R;
    }
    interface Expect {
      /**
       * Use `.toBeFalse` when checking a value is equal (===) to `false`.
       */
      toBeFalse(): void;
    }
  }
}
export declare function toBeFalse(expected: any): jest.CustomMatcherResult;
