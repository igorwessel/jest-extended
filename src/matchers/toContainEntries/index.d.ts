/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Use `.toContainEntries` when checking if an object contains all of the provided entries.
       *
       * @param {Array.<Array.<keyof T, T[keyof T]>>} entries
       */
      toContainEntries(entries: Array<[keyof T, T[keyof T]]>): R;
    }
    interface Expect {
      /**
       * Use `.toContainEntries` when checking if an object contains all of the provided entries.
       *
       * @param {Array.<Array.<keyof E, E[keyof E]>>} entries
       */
      toContainEntries<E = any>(entries: Array<[keyof E, E[keyof E]]>): void;
    }
  }
}
export declare function toContainEntries<T = {}>(
  actual: T,
  expected: Array<[keyof T, T[keyof T]]>,
): jest.CustomMatcherResult;
