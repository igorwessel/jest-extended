import { Diff, DIFF_DELETE, DIFF_EQUAL, DIFF_INSERT } from 'jest-diff';
import { EXPECTED_COLOR, INVERTED_COLOR, RECEIVED_COLOR } from 'jest-matcher-utils';

export const tokenize = (str: string): { value: string; isWhitespace: boolean }[] => {
  const isWhitespace = (char: string) => /\s/.test(char);
  const tokens = [];
  let idx = 0;
  let token;

  while (idx < str.length) {
    const char = str.charAt(idx);
    const isCurrentCharWhitespace = isWhitespace(char);

    if (token) {
      if (token.isWhitespace === isCurrentCharWhitespace) {
        token.value += char;
      } else {
        tokens.push(token);
        token = undefined;
        continue;
      }
    } else {
      token = {
        value: char,
        isWhitespace: isCurrentCharWhitespace,
      };
    }

    idx += 1;
  }

  if (token) {
    /* push last token */
    tokens.push(token);
  }

  return tokens;
};

const colorTokens = (str: string, color: (a: string) => string): string => {
  const tokens = tokenize(str);
  return tokens.reduce((acc, { value, isWhitespace }) => acc + (isWhitespace ? value : color(value)), '');
};

export const printExpected = (diff: Diff[]): string =>
  diff.reduce((acc, diffObject) => {
    const operation = diffObject[0];
    const value = diffObject[1];

    if (operation === DIFF_EQUAL) return acc + colorTokens(value, EXPECTED_COLOR);
    if (operation === DIFF_DELETE) return acc + colorTokens(value, str => INVERTED_COLOR(EXPECTED_COLOR(str)));
    return acc;
  }, '');

export const printReceived = (diff: Diff[]): string =>
  diff.reduce((acc, diffObject) => {
    const operation = diffObject[0];
    const value = diffObject[1];

    if (operation === DIFF_EQUAL) return acc + colorTokens(value, RECEIVED_COLOR);
    if (operation === DIFF_INSERT) return acc + colorTokens(value, str => INVERTED_COLOR(RECEIVED_COLOR(str)));
    return acc;
  }, '');
