import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';
import { determinePropertyMessage } from '../../utils';

import predicate from './predicate';

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

const passMessage = (received: any[], expected: number) => () =>
  `${matcherHint('.not.toBeArrayOfSize')}

Expected value to not be an array of size:
  ${printExpected(expected)}
Received:
  value: ${printReceived(received)}
  length: ${printReceived(determinePropertyMessage(received, 'length'))}`;

const failMessage = (received: any[], expected: number) => () =>
  `${matcherHint('.toBeArrayOfSize')}

Expected value to be an array of size:
  ${printExpected(expected)}
Received:
  value: ${printReceived(received)}
  length: ${printReceived(determinePropertyMessage(received, 'length'))}`;

export function toBeArrayOfSize(received: any[], expected: number) {
  const pass = predicate(received, expected);
  if (pass) {
    return { pass: true, message: passMessage(received, expected) };
  }

  return { pass: false, message: failMessage(received, expected) };
}
