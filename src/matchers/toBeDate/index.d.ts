/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeDate` when checking if a value is a `Date`.
       */
      toBeDate(): R;
    }
    interface Expect {
      /**
       * Use `.toBeDate` when checking if a value is a `Date`.
       */
      toBeDate(): void;
    }
  }
}
export declare function toBeDate(expected: any): jest.CustomMatcherResult;
