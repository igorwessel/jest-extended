import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Note: Currently unimplemented
       * Passing assertion
       *
       * @param {String} message
       */
      pass(message?: string): R;
    }

    interface Expect {
      /**
       * Note: Currently unimplemented
       * Passing assertion
       *
       * @param {String} message
       */
      pass(message?: string): void;
    }
  }
}

const passMessage = (message?: string) => {
  if (message) return () => message;
  else return () => 'passes by .pass() assertion';
};

export function pass(expected: any, message?: string): jest.CustomMatcherResult {
  return { pass: predicate(), message: passMessage(message) };
}
