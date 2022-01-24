/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use .toBeEmpty when checking if a String '', Array [] or Object {} is empty.
       */
      toBeEmpty(): R;
    }
    interface Expect {
      /**
       * Use .toBeEmpty when checking if a String '', Array [] or Object {} is empty.
       */
      toBeEmpty(): void;
    }
  }
}
export declare function toBeEmpty(expected: any): jest.CustomMatcherResult;
