/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toEqualIgnoringWhitespace` when checking if a `String` is equal (===) to given `String` ignoring white-space.
       *
       * @param {String} string
       */
      toEqualIgnoringWhitespace(string: string): any;
    }
    interface Expect {
      /**
       * Use `.toEqualIgnoringWhitespace` when checking if a `String` is equal (===) to given `String` ignoring white-space.
       *
       * @param {String} string
       */
      toEqualIgnoringWhitespace(string: string): any;
    }
  }
}
export declare function toEqualIgnoringWhitespace(received: string, expected: string): jest.CustomMatcherResult;
