/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toHaveBeenCalledOnce` to check if a `Mock` was called exactly one time.
       */
      toHaveBeenCalledOnce(): R;
    }
    interface Expect {
      /**
       * Use `.toHaveBeenCalledOnce` to check if a `Mock` was called exactly one time.
       */
      toHaveBeenCalledOnce(): void;
    }
  }
}
export declare function toHaveBeenCalledOnce(received: jest.MockInstance<unknown, unknown[]>): jest.CustomMatcherResult;
