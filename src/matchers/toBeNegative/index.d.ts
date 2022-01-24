/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeNegative` when checking if a value is a negative `Number`.
       */
      toBeNegative(): R;
    }
    interface Expect {
      /**
       * Use `.toBeNegative` when checking if a value is a negative `Number`.
       */
      toBeNegative(): void;
    }
  }
}
export declare function toBeNegative(expected: any): jest.CustomMatcherResult;
