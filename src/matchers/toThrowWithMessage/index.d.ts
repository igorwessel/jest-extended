/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toThrowWithMessage` when checking if a callback function throws an error of a given type with a given error message.
       *
       * @param {Function} type
       * @param {String | RegExp} message
       */
      toThrowWithMessage(type: Function, message: string | RegExp): R;
    }
    interface Expect {
      /**
       * Use `.toThrowWithMessage` when checking if a callback function throws an error of a given type with a given error message.
       *
       * @param {Function} type
       * @param {String | RegExp} message
       */
      toThrowWithMessage(type: Function, message: string | RegExp): void;
    }
  }
}
export declare function toThrowWithMessage(
  callbackOrPromiseReturn: unknown,
  type: unknown,
  message: unknown,
): jest.CustomMatcherResult;
