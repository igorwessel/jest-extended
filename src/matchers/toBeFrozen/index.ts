import { matcherHint } from 'jest-matcher-utils';

import predicate from './predicate';

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

const passMessage = () => matcherHint('.not.toBeFrozen', 'received', '') + '\n\n' + 'Expected object to not be frozen';

const failMessage = () => matcherHint('.toBeFrozen', 'received', '') + '\n\n' + 'Expected object to be frozen';

export function toBeFrozen(expected: any): jest.CustomMatcherResult {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage };
  }

  return { pass: false, message: failMessage };
}
