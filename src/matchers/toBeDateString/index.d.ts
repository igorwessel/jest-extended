/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeDateString` when checking if a value is a valid date string.
       */
      toBeDateString(): R;
    }
    interface Expect {
      /**
       * Use `.toBeDateString` when checking if a value is a valid date string.
       */
      toBeDateString(): void;
    }
  }
}
export declare function toBeDateString(expected: any): jest.CustomMatcherResult;
