/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toInclude` when checking if a `String` includes the given `String` substring.
       *
       * @param {String} substring
       */
      toInclude(substring: string): R;
    }
    interface Expect {
      /**
       * Use `.toInclude` when checking if a `String` includes the given `String` substring.
       *
       * @param {String} substring
       */
      toInclude(substring: string): void;
    }
    interface InverseAsymmetricMatchers {
      /**
       * Use `.toInclude` when checking if a `String` includes the given `String` substring.
       *
       * @param {String} substring
       */
      toInclude(substring: string): void;
    }
  }
}
export declare function toInclude(actual: string, expected: string): jest.CustomMatcherResult;
