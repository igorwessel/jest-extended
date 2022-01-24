/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toEndWith` when checking if a `String` ends with a given `String` suffix.
       *
       * @param {String} suffix
       */
      toEndWith(suffix: string): R;
    }
    interface Expect {
      /**
       * Use `.toEndWith` when checking if a `String` ends with a given `String` suffix.
       *
       * @param {String} suffix
       */
      toEndWith(suffix: string): void;
    }
  }
}
export declare function toEndWith(string: string, suffix: string): jest.CustomMatcherResult;
