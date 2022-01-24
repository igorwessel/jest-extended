/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Use `.toContainKey` when checking if an object contains the provided key.
       *
       * @param {String} key
       */
      toContainKey(key: keyof T): R;
    }
    interface Expect {
      /**
       * Use `.toContainKey` when checking if an object contains the provided key.
       *
       * @param {String} key
       */
      toContainKey(key: string): void;
    }
  }
}
export declare function toContainKey<T = {}>(actual: T, expected: keyof T): jest.CustomMatcherResult;
