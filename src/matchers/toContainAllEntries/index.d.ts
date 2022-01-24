/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Use `.toContainAllEntries` when checking if an object only contains all of the provided entries.
       *
       * @param {Array.<Array.<keyof E, E[keyof E]>>} entries
       */
      toContainAllEntries(entries: Array<[keyof T, T[keyof T]]>): R;
    }
    interface Expect {
      /**
       * Use `.toContainAllEntries` when checking if an object only contains all of the provided entries.
       *
       * @param {Array.<Array.<keyof E, E[keyof E]>>} entries
       */
      toContainAllEntries<E = any>(entries: Array<[keyof E, E[keyof E]]>): void;
    }
  }
}
export declare function toContainAllEntries(actual: {}, expected: any[]): jest.CustomMatcherResult;
