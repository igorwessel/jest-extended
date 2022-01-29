import predicate from './predicate';

describe('toSatisfyAll', () => {
  let isOdd = (el: number) => el % 2 === 1;

  describe('returns true', () => {
    test('when all elements satisfy', () => {
      expect(predicate([1, 3, 7, 9], isOdd)).toBe(true);
    });

    test('works for repeated elements', () => {
      expect(predicate([1, 3, 3, 9], isOdd)).toBe(true);
    });
  });

  describe('returns false', () => {
    test('when all elements fail', () => {
      expect(predicate([10, 2, 4, 6], isOdd)).toBe(false);
    });

    test('when either element fails', () => {
      expect(predicate([5, 7, 8, 9], isOdd)).toBe(false);
    });

    test('works for repeated elements', () => {
      expect(predicate([1, 3, 3, 9, 10, 11], isOdd)).toBe(false);
    });
  });
});