/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Use `.toContainAnyEntries` when checking if an object contains at least one of the provided entries.
       *
       * @param {Array.<Array.<keyof E, E[keyof E]>>} entries
       */
      toContainAnyEntries(entries: Array<[keyof T, T[keyof T]]>): R;
    }
    interface Expect {
      /**
       * Use `.toContainAnyEntries` when checking if an object contains at least one of the provided entries.
       *
       * @param {Array.<Array.<keyof E, E[keyof E]>>} entries
       */
      toContainAnyEntries<E = any>(entries: Array<[keyof E, E[keyof E]]>): void;
    }
  }
}
export declare function toContainAnyEntries<T extends {}>(
  object: T,
  entries: Array<[keyof T, T[keyof T]]>,
): jest.CustomMatcherResult;
