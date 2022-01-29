import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

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

const positiveHint = matcherHint('.toThrowWithMessage', 'function', 'type', { secondArgument: 'message' });
const negativeHint = matcherHint('.not.toThrowWithMessage', 'function', 'type', { secondArgument: 'message' });

const passMessage = (received: unknown, expected: unknown) => () =>
  negativeHint +
  '\n\n' +
  'Expected not to throw:\n' +
  `  ${printExpected(expected)}\n` +
  'Thrown:\n' +
  `  ${printReceived(received)}\n`;

const failMessage = (received: unknown, expected: unknown) => () =>
  positiveHint +
  '\n\n' +
  'Expected to throw:\n' +
  `  ${printExpected(expected)}\n` +
  'Thrown:\n' +
  `  ${printReceived(received)}\n`;

export function toThrowWithMessage(
  callbackOrPromiseReturn: unknown,
  type: unknown,
  message: unknown,
): jest.CustomMatcherResult {
  //@ts-expect-error
  const isFromReject = this && this.promise === 'rejects'; // See https://github.com/facebook/jest/pull/7621#issue-244312550
  if ((!callbackOrPromiseReturn || typeof callbackOrPromiseReturn !== 'function') && !isFromReject) {
    return {
      pass: false,
      message: () =>
        positiveHint + '\n\n' + `Received value must be a function but instead "${callbackOrPromiseReturn}" was found`,
    };
  }

  if (!type || typeof type !== 'function') {
    return {
      pass: false,
      message: () => positiveHint + '\n\n' + `Expected type to be a function but instead "${type}" was found`,
    };
  }

  if (!message) {
    return {
      pass: false,
      message: () => positiveHint + '\n\n' + ' Message argument is required. ',
    };
  }

  if (typeof message !== 'string' && !(message instanceof RegExp)) {
    return {
      pass: false,
      message: () =>
        positiveHint +
        '\n\n' +
        'Unexpected argument for message\n' +
        'Expected: "string" or "regexp\n' +
        `Got: "${message}"`,
    };
  }

  let error;
  if (isFromReject) {
    error = callbackOrPromiseReturn;
  } else {
    try {
      //@ts-ignore
      callbackOrPromiseReturn();
    } catch (e) {
      error = e;
    }
  }

  if (!error) {
    return {
      pass: false,
      message: () => 'Expected the function to throw an error.\n' + "But it didn't throw anything.",
    };
  }

  //@ts-ignore
  const pass = predicate(error, type, message);

  if (pass) {
    //@ts-ignore
    return { pass: true, message: passMessage(error, new type(message)) };
  }

  //@ts-ignore
  return { pass: false, message: failMessage(error, new type(message)) };
}
