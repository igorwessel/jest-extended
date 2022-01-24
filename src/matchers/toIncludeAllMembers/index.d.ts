/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toIncludeAllMembers` when checking if an `Array` contains all of the same members of a given set.
       * @param {Array.<*>} members
       */
      toIncludeAllMembers<E = any>(members: E[]): R;
    }
    interface Expect {
      /**
       * Use `.toIncludeAllMembers` when checking if an `Array` contains all of the same members of a given set.
       * @param {Array.<*>} members
       */
      toIncludeAllMembers<E = any>(members: E[]): void;
    }
  }
}
export declare function toIncludeAllMembers(actual: any[], expected: any[]): jest.CustomMatcherResult;
