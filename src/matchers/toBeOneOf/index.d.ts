/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Use .toBeOneOf when checking if a value is a member of a given Array.
       * @param {Array.<*>} members
       */
      toBeOneOf(members: T[]): R;
    }
    interface Expect {
      /**
       * Use .toBeOneOf when checking if a value is a member of a given Array.
       * @param {Array.<*>} members
       */
      toBeOneOf<E = any>(members: E[]): void;
    }
  }
}
export declare function toBeOneOf<T>(item: T, list: T[]): jest.CustomMatcherResult;
