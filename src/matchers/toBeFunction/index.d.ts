/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeFunction` when checking if a value is a `Function`.
       */
      toBeFunction(): R;
    }
    interface Expect {
      /**
       * Use `.toBeFunction` when checking if a value is a `Function`.
       */
      toBeFunction(): void;
    }
  }
}
export declare function toBeFunction(expected: any): jest.CustomMatcherResult;
