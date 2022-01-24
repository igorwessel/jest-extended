/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toIncludeAnyMembers` when checking if an `Array` contains any of the members of a given set.
       * @param {Array.<*>} members
       */
      toIncludeAnyMembers<E = any>(members: E[]): R;
    }
    interface Expect {
      /**
       * Use `.toIncludeAnyMembers` when checking if an `Array` contains any of the members of a given set.
       * @param {Array.<*>} members
       */
      toIncludeAnyMembers<E = any>(members: E[]): void;
    }
  }
}
export declare function toIncludeAnyMembers(actual: any[], expected: any[]): jest.CustomMatcherResult;
