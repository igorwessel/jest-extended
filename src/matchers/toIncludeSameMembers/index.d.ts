/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toIncludeSameMembers` when checking if two arrays contain equal values, in any order.
       * @param {Array.<*>} members
       */
      toIncludeSameMembers<E = any>(members: E[]): R;
    }
    interface Expect {
      /**
       * Use `.toIncludeSameMembers` when checking if two arrays contain equal values, in any order.
       * @param {Array.<*>} members
       */
      toIncludeSameMembers<E = any>(members: E[]): void;
    }
  }
}
export declare function toIncludeSameMembers(actual: any[], expected: any[]): jest.CustomMatcherResult;
