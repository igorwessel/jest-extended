/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Use `.toContainAllValues` when checking if an object only contains all of the provided values.
       *
       * @param {Array.<*>} values
       */
      toContainAllValues(values: Array<T[keyof T]>): R;
    }
    interface Expect {
      /**
       * Use `.toContainAllValues` when checking if an object only contains all of the provided values.
       *
       * @param {Array.<*>} values
       */
      toContainAllValues<E = any>(values: Array<E[keyof E]>): void;
    }
  }
}
export declare function toContainAllValues<T = {}>(actual: T, expected: Array<T[keyof T]>): jest.CustomMatcherResult;
