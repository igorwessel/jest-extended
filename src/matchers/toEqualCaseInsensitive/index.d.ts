/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toEqualCaseInsensitive` when checking if a string is equal (===) to another ignoring the casing of both strings.
       *
       * @param {String} string
       */
      toEqualCaseInsensitive(string: string): R;
    }
    interface Expect {
      /**
       * Use `.toEqualCaseInsensitive` when checking if a string is equal (===) to another ignoring the casing of both strings.
       *
       * @param {String} string
       */
      toEqualCaseInsensitive(string: string): void;
    }
  }
}
export declare function toEqualCaseInsensitive(received: string, expected: string): jest.CustomMatcherResult;
