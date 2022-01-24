/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Note: Currently unimplemented
       * Failing assertion
       *
       * @param {String} message
       */
      fail(message?: string): never;
    }
    interface Expect {
      /**
       * Note: Currently unimplemented
       * Failing assertion
       *
       * @param {String} message
       */
      fail(message?: string): void;
    }
  }
}
export declare function fail(expected: any, message?: string): jest.CustomMatcherResult;
