/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Note: Currently unimplemented
       * Passing assertion
       *
       * @param {String} message
       */
      pass(message?: string): R;
    }
    interface Expect {
      /**
       * Note: Currently unimplemented
       * Passing assertion
       *
       * @param {String} message
       */
      pass(message?: string): void;
    }
  }
}
export declare function pass(expected: any, message?: string): jest.CustomMatcherResult;
