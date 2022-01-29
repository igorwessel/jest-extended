import { matcherHint } from 'jest-matcher-utils';

import predicate from './predicate';

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

const passMessage = () => () => matcherHint('.not.toBeSealed', 'received', '') + '\n\nExpected object to be not sealed';

const failMessage = () => () => matcherHint('.toBeSealed', 'received', '') + '\n\nExpected object to not sealed';

export function toBeSealed(expected: {}): jest.CustomMatcherResult {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage() };
  }

  return { pass: false, message: failMessage() };
}
