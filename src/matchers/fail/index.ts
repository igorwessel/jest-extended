import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Note: Currently unimplemented
       * Failing assertion
       *
       * @param {String} message
       */
      fail(message?: string): never;
    }

    interface Expect {
      /**
       * Note: Currently unimplemented
       * Failing assertion
       *
       * @param {String} message
       */
      fail(message?: string): void;
    }
  }
}

const failMessage = (message?: string) => {
  if (message) return () => message;
  else return () => 'fails by .fail() assertion';
};

export function fail(expected: any, message?: string): jest.CustomMatcherResult {
  return { pass: predicate(), message: failMessage(message) };
}
