/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeValidDate` when checking if a value is a `valid Date`.
       */
      toBeValidDate(): R;
    }
    interface Expect {
      /**
       * Use `.toBeValidDate` when checking if a value is a `valid Date`.
       */
      toBeValidDate(): any;
    }
  }
}
export declare function toBeValidDate(expected: Date): jest.CustomMatcherResult;
