/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeString` when checking if a value is a `String`.
       */
      toBeString(): R;
    }
    interface Expect {
      /**
       * Use `.toBeString` when checking if a value is a `String`.
       */
      toBeString(): void;
    }
  }
}
export declare function toBeString(expected: unknown): jest.CustomMatcherResult;
