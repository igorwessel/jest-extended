/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Use `.toContainValue` when checking if an object contains the provided value.
       *
       * @param {*} value
       */
      toContainValue<E>(value: E): R;
    }
    interface Expect {
      /**
       * Use `.toContainValue` when checking if an object contains the provided value.
       *
       * @param {*} value
       */
      toContainValue<E>(value: E): void;
    }
  }
}
export declare function toContainValue<T extends {}>(actual: T, expected: T[keyof T]): jest.CustomMatcherResult;
