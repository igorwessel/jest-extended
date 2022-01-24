/// <reference types="jest" />
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toPartiallyContain` when checking if any array value matches the partial member.
       * @param {*} member
       */
      toPartiallyContain<E = any>(member: E): any;
    }
    interface Expect {
      /**
       * Use `.toPartiallyContain` when checking if any array value matches the partial member.
       * @param {*} member
       */
      toPartiallyContain<E = any>(member: E): any;
    }
  }
}
export declare function toPartiallyContain<E = any>(
  actual: {
    [key: string]: E;
  }[],
  expected: E,
): jest.CustomMatcherResult;
