/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBePositive` when checking if a value is a positive `Number`.
       */
      toBePositive(): R;
    }
    interface Expect {
      /**
       * Use `.toBePositive` when checking if a value is a positive `Number`.
       */
      toBePositive(): void;
    }
  }
}
export declare function toBePositive(expected: number): jest.CustomMatcherResult;
