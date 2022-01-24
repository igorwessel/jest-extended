/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Use `.toContainAnyKeys` when checking if an object contains at least one of the provided keys.
       *
       * @param {Array.<String>} keys
       */
      toContainAnyKeys(keys: Array<keyof T>): R;
    }
    interface Expect {
      /**
       * Use `.toContainAnyKeys` when checking if an object contains at least one of the provided keys.
       *
       * @param {Array.<String>} keys
       */
      toContainAnyKeys<E = any>(keys: Array<keyof E | string>): void;
    }
  }
}
export declare function toContainAnyKeys<T extends {}>(actual: T, expected: Array<keyof T>): jest.CustomMatcherResult;
