/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeBefore` when checking if a date occurs before `date`.
       * @param {Date} date
       */
      toBeBefore(date: Date): R;
    }
    interface Expect {
      /**
       * Use `.toBeBefore` when checking if a date occurs before `date`.
       * @param {Date} date
       */
      toBeBefore(date: Date): void;
    }
  }
}
export declare function toBeBefore(received: Date, before: Date): jest.CustomMatcherResult;
