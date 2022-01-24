/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toStartWith` when checking if a `String` starts with a given `String` prefix.
       *
       * @param {String} prefix
       */
      toStartWith(prefix: string): R;
    }
    interface Expect {
      /**
       * Use `.toStartWith` when checking if a `String` starts with a given `String` prefix.
       *
       * @param {String} prefix
       */
      toStartWith(prefix: string): void;
    }
  }
}
export declare function toStartWith(string: string, prefix: string): jest.CustomMatcherResult;
