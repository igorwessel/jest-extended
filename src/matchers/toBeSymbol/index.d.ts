/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toBeSymbol` when checking if a value is a `Symbol`.
       */
      toBeSymbol(): R;
    }
    interface Expect {
      /**
       * Use `.toBeSymbol` when checking if a value is a `Symbol`.
       */
      toBeSymbol(): void;
    }
  }
}
export declare function toBeSymbol(expected: symbol): jest.CustomMatcherResult;
