/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toContainValues` when checking if an object contains all of the provided values.
       *
       * @param {Array.<*>} values
       */
      toContainValues<E = any>(values: E[]): R;
    }
    interface Expect {
      /**
       * Use `.toContainValues` when checking if an object contains all of the provided values.
       *
       * @param {Array.<*>} values
       */
      toContainValues<E = any>(values: E[]): void;
    }
  }
}
export declare function toContainValues<E>(actual: {}, expected: E[]): jest.CustomMatcherResult;
