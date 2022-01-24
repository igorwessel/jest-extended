/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeEven` when checking if a value is an even `Number`.
       */
      toBeEven(): R;
    }
    interface Expect {
      /**
       * Use `.toBeEven` when checking if a value is an even `Number`.
       */
      toBeEven(): void;
    }
  }
}
export declare function toBeEven(expected: number): jest.CustomMatcherResult;
