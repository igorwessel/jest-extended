/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Use `.toContainKeys` when checking if an object has all of the provided keys.
       *
       * @param {Array.<String>} keys
       */
      toContainKeys(keys: string[]): R;
    }
    interface Expect {
      /**
       * Use `.toContainKeys` when checking if an object has all of the provided keys.
       *
       * @param {Array.<String>} keys
       */
      toContainKeys(keys: string[]): void;
    }
  }
}
export declare function toContainKeys<T = {}>(actual: T, expected: Array<keyof T>): jest.CustomMatcherResult;
