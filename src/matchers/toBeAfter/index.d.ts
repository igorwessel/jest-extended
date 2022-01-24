/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeAfter` when checking if a date occurs after `date`.
       * @param {Date} date
       */
      toBeAfter(date: Date): R;
    }
    interface Expect {
      /**
       * Use `.toBeAfter` when checking if a date occurs after `date`.
       * @param {Date} date
       */
      toBeAfter(date: Date): void;
    }
  }
}
export declare function toBeAfter(received: any, after: Date): jest.CustomMatcherResult;
