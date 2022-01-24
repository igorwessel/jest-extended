/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeSealed` when checking if an object is sealed.
       */
      toBeSealed(): R;
    }
    interface Expect {
      /**
       * Use `.toBeSealed` when checking if an object is sealed.
       */
      toBeSealed(): void;
    }
  }
}
export declare function toBeSealed(expected: {}): jest.CustomMatcherResult;
