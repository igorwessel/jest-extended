/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeHexadecimal` when checking if a value is a valid HTML hex color.
       */
      toBeHexadecimal(): R;
    }
    interface Expect {
      /**
       * Use `.toBeHexadecimal` when checking if a value is a valid HTML hex color.
       */
      toBeHexadecimal(): void;
    }
  }
}
export declare function toBeHexadecimal(expected: any): jest.CustomMatcherResult;
