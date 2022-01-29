import { diffStringsRaw, DIFF_EQUAL } from 'jest-diff';
import type { Diff } from 'jest-diff';

const removeWhitespace = (str: string) => str.trim().replace(/\s+/g, '');

export default (received: string, expected: string): { pass: boolean; diff: Diff[] } => {
  /* calculate diff of received w.r.t expected string */
  const diff = diffStringsRaw(expected, received, false);

  /* mark every diff result object with value of white-space as DIFF_EQUAL */
  diff.forEach(diffObject => {
    if (diffObject[1].trim()) return;
    diffObject[0] = DIFF_EQUAL;
  });

  /* determine whether strings are equal after removing white-space */
  const pass = removeWhitespace(received) === removeWhitespace(expected);

  return {
    diff,
    pass,
  };
};
