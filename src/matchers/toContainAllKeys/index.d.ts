/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Use `.toContainAllKeys` when checking if an object only contains all of the provided keys.
       *
       * @param {Array.<String>} keys
       */
      toContainAllKeys(keys: Array<keyof T>): R;
    }
    interface Expect {
      /**
       * Use `.toContainAllKeys` when checking if an object only contains all of the provided keys.
       *
       * @param {Array.<String>} keys
       */
      toContainAllKeys<E = {}>(keys: Array<keyof E>): void;
    }
  }
}
export declare function toContainAllKeys<T extends {}>(actual: T, expected: Array<keyof T>): jest.CustomMatcherResult;
