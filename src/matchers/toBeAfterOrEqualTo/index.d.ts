/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeAfterOrEqualTo` when checking if a date equals to or occurs after `date`.
       * @param {Date} date
       */
      toBeAfterOrEqualTo(date: Date): R;
    }
    interface Expect {
      /**
       * Use `.toBeAfterOrEqualTo` when checking if a date equals to or occurs after `date`.
       * @param {Date} date
       */
      toBeAfterOrEqualTo(date: Date): void;
    }
  }
}
export declare function toBeAfterOrEqualTo(received: any, after: Date): jest.CustomMatcherResult;
