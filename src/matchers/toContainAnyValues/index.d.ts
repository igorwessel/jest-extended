/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Use `.toContainAnyValues` when checking if an object contains at least one of the provided values.
       *
       * @param {Array.<*>} values
       */
      toContainAnyValues(values: Array<T[keyof T]>): R;
    }
    interface Expect {
      /**
       * Use `.toContainAnyValues` when checking if an object contains at least one of the provided values.
       *
       * @param {Array.<*>} values
       */
      toContainAnyValues<E = any>(values: Array<E[keyof E]>): void;
    }
  }
}
export declare function toContainAnyValues(actual: {}, expected: any[]): jest.CustomMatcherResult;
