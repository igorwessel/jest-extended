/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toIncludeMultiple` when checking if a `String` includes all of the given substrings.
       *
       * @param {Array.<String>} substring
       */
      toIncludeMultiple(substring: string[]): R;
    }
    interface Expect {
      /**
       * Use `.toIncludeMultiple` when checking if a `String` includes all of the given substrings.
       *
       * @param {Array.<String>} substring
       */
      toIncludeMultiple(substring: string[]): void;
    }
  }
}
export declare function toIncludeMultiple(actual: string, expected: string[]): jest.CustomMatcherResult;
