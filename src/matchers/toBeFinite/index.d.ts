/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeFinite` when checking if a value is a `Number`, not `NaN` or `Infinity`.
       */
      toBeFinite(): R;
    }
    interface Expect {
      /**
       * Use `.toBeFinite` when checking if a value is a `Number`, not `NaN` or `Infinity`.
       */
      toBeFinite(): void;
    }
  }
}
export declare function toBeFinite(expected: number): jest.CustomMatcherResult;
