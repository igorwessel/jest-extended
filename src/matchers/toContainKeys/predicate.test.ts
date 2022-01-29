import predicate from './predicate';

const data = { a: 'foo', b: 'bar', c: 'baz' };

describe('.toContainKeys', () => {
  test('passes when object contains all keys', () => {
    expect(predicate(data, ['a', 'b'])).toBe(true);
  });

  test('fails when object does not contain all keys', () => {
    //@ts-expect-error
    expect(predicate(data, ['d'])).toBe(false);
  });

  test('does not throw when object is undefined', () => {
    expect(() => {
      //@ts-expect-error
      predicate(undefined, ['d']);
    }).not.toThrow();
  });
});