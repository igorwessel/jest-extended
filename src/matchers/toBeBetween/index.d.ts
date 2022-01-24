/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeBetween` when checking if a date occurs between `startDate` and `endDate`.
       * @param {Date} startDate
       * @param {Date} endDate
       */
      toBeBetween(startDate: Date, endDate: Date): R;
    }
    interface Expect {
      /**
       * Use `.toBeBetween` when checking if a date occurs between `startDate` and `endDate`.
       * @param {Date} startDate
       * @param {Date} endDate
       */
      toBeBetween(startDate: Date, endDate: Date): void;
    }
  }
}
export declare function toBeBetween(received: any, startDate: Date, endDate: Date): jest.CustomMatcherResult;
