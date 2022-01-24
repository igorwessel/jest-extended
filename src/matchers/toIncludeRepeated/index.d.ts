/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toIncludeRepeated` when checking if a `String` includes the given `String` substring the correct number of times.
       *
       * @param {String} substring
       * @param {Number} times
       */
      toIncludeRepeated(substring: string, times: number): R;
    }
    interface Expect {
      /**
       * Use `.toIncludeRepeated` when checking if a `String` includes the given `String` substring the correct number of times.
       *
       * @param {String} substring
       * @param {Number} times
       */
      toIncludeRepeated(substring: string, times: number): void;
    }
  }
}
export declare function toIncludeRepeated(
  actual: string,
  expected: string,
  occurrences: number,
): jest.CustomMatcherResult;
