import { matcherHint } from 'jest-matcher-utils';

import predicate from './predicate';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toReject` when checking if a promise rejects.
       */
      toReject(): R;
    }
    interface Expect {
      /**
       * Use `.toReject` when checking if a promise rejects.
       */
      toReject(): void;
    }
  }
}

const passMessage = () =>
  matcherHint('.not.toReject', 'received', '') + '\n\n' + 'Expected promise to resolve, however it rejected.\n';

const failMessage = () =>
  matcherHint('.toReject', 'received', '') + '\n\n' + 'Expected promise to reject, however it resolved.\n';

export async function toReject(promise: Promise<unknown>): Promise<jest.CustomMatcherResult> {
  const pass = await predicate(promise);
  if (pass) {
    return { pass: true, message: passMessage };
  }
  return { pass: false, message: failMessage };
}
