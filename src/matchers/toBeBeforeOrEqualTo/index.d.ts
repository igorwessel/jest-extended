/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeBeforeOrEqualTo` when checking if a date equals to or occurs before `date`.
       * @param {Date} date
       */
      toBeBeforeOrEqualTo(date: Date): R;
    }
    interface Expect {
      /**
       * Use `.toBeBeforeOrEqualTo` when checking if a date equals to or occurs before `date`.
       * @param {Date} date
       */
      toBeBeforeOrEqualTo(date: Date): void;
    }
  }
}
export declare function toBeBeforeOrEqualTo(received: Date, before: Date): jest.CustomMatcherResult;
