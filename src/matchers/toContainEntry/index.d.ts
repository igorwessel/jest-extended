/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Use `.toContainEntry` when checking if an object contains the provided entry.
       *
       * @param {Array.<[keyof T, T[keyof T]>} entry
       */
      toContainEntry(entry: [keyof T, T[keyof T]]): R;
    }
    interface Expect {
      /**
       * Use `.toContainEntry` when checking if an object contains the provided entry.
       *
       * @param {Array.<[keyof E, E[keyof E]>} entry
       */
      toContainEntry<E = any>(entry: [keyof E, E[keyof E]]): void;
    }
  }
}
export declare function toContainEntry<T = {}>(actual: T, expected: [keyof T, T[keyof T]]): jest.CustomMatcherResult;
