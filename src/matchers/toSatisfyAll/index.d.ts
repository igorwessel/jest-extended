/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toSatisfyAll` when you want to use a custom matcher by supplying a predicate function that returns a `Boolean` for all values in an array.
       * @param {Function} predicate
       */
      toSatisfyAll<E = any>(predicate: (x: E) => boolean): R;
    }
    interface Expect {
      /**
       * Use `.toSatisfyAll` when you want to use a custom matcher by supplying a predicate function that returns a `Boolean` for all values in an array.
       * @param {Function} predicate
       */
      toSatisfyAll<E = any>(predicate: (x: E) => boolean): void;
    }
  }
}
export declare function toSatisfyAll<B extends () => any>(
  actual: any[],
  expected: ReturnType<B>,
): jest.CustomMatcherResult;
