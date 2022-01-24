/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toSatisfyAny` when you want to use a custom matcher by supplying a predicate function that returns `true` for any matching value in an array.
       * @param {Function} predicate
       */
      toSatisfyAny(predicate: (x: any) => boolean): R;
    }
    interface Expect {
      /**
       * Use `.toSatisfyAny` when you want to use a custom matcher by supplying a predicate function that returns `true` for any matching value in an array.
       * @param {Function} predicate
       */
      toSatisfyAny(predicate: (x: any) => boolean): void;
    }
  }
}
export declare function toSatisfyAny<B extends () => any>(
  actual: any[],
  expected: ReturnType<B>,
): jest.CustomMatcherResult;
