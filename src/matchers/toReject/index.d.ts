/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toReject` when checking if a promise rejects.
       */
      toReject(): R;
    }
    interface Expect {
      /**
       * Use `.toReject` when checking if a promise rejects.
       */
      toReject(): void;
    }
  }
}
export declare function toReject(promise: Promise<unknown>): Promise<jest.CustomMatcherResult>;
