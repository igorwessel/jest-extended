/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeExtensible` when checking if an object is extensible.
       */
      toBeExtensible(): R;
    }
    interface Expect {
      /**
       * Use `.toBeExtensible` when checking if an object is extensible.
       */
      toBeExtensible(): void;
    }
  }
}
export declare function toBeExtensible(expected: any): jest.CustomMatcherResult;
