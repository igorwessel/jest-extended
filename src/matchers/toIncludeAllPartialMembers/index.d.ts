/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toIncludeAllPartialMembers` when checking if an `Array` contains all of the same partial members of a given set.
       * @param {Array.<*>} members
       */
      toIncludeAllPartialMembers<E = any>(members: E[]): R;
    }
    interface Expect {
      /**
       * Use `.toIncludeAllPartialMembers` when checking if an `Array` contains all of the same partial members of a given set.
       * @param {Array.<*>} members
       */
      toIncludeAllPartialMembers<E = any>(members: E[]): void;
    }
  }
}
export declare function toIncludeAllPartialMembers(actual: any[], expected: any[]): jest.CustomMatcherResult;
