/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeArrayOfSize` when checking if a value is an `Array` of size x.
       * @param {Number} x
       */
      toBeArrayOfSize(x: number): R;
    }
    interface Expect {
      /**
       * Use `.toBeArrayOfSize` when checking if a value is an `Array` of size x.
       * @param {Number} x
       */
      toBeArrayOfSize(x: number): void;
    }
  }
}
export declare function toBeArrayOfSize(received: any[], expected: number): jest.CustomMatcherResult;
