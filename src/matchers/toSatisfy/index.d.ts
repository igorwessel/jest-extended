/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toSatisfy` when you want to use a custom matcher by supplying a predicate function that returns a `Boolean`.
       * @param {Function} predicate
       */
      toSatisfy<E = any>(predicate: (x: E) => boolean): R;
    }
    interface Expect {
      /**
       * Use `.toSatisfy` when you want to use a custom matcher by supplying a predicate function that returns a `Boolean`.
       * @param {Function} predicate
       */
      toSatisfy<E = any>(predicate: (x: E) => boolean): void;
    }
  }
}
export declare function toSatisfy<A, B extends () => any>(
  actual: A,
  predicate: ReturnType<B>,
): jest.CustomMatcherResult;
