/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeWithin` when checking if a number is in between the given bounds of: start (inclusive) and end (exclusive).
       *
       * @param {Number} start
       * @param {Number} end
       */
      toBeWithin(start: number, end: number): R;
    }
    interface Expect {
      /**
       * Use `.toBeWithin` when checking if a number is in between the given bounds of: start (inclusive) and end (exclusive).
       *
       * @param {Number} start
       * @param {Number} end
       */
      toBeWithin(start: number, end: number): any;
    }
  }
}
export declare function toBeWithin(number: number, start: number, end: number): jest.CustomMatcherResult;
