/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeFrozen` when checking if an object is frozen.
       */
      toBeFrozen(): R;
    }
    interface Expect {
      /**
       * Use `.toBeFrozen` when checking if an object is frozen.
       */
      toBeFrozen(): void;
    }
  }
}
export declare function toBeFrozen(expected: any): jest.CustomMatcherResult;
