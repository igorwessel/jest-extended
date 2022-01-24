/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toResolve` when checking if a promise resolves.
       */
      toResolve(): R;
    }
    interface Expect {
      /**
       * Use `.toResolve` when checking if a promise resolves.
       */
      toResolve(): void;
    }
  }
}
export declare function toResolve(promise: Promise<unknown>): Promise<jest.CustomMatcherResult>;
