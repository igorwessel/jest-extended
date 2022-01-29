import predicate from './predicate';

const data = { a: 'foo', b: 'bar', c: 'baz' };

describe('.toContainAnyEntries', () => {
  test('passes when given object contains entries', () => {
    expect(
      predicate(data, [
        ['a', 'qux'],
        ['a', 'foo'],
        //@ts-expect-error
        ['x', 'foo'],
      ]),
    ).toBe(true);
  });

  test('passes when given object contains entries with nested values', () => {
    expect(
      predicate({ hello: { message: 'world' } }, [
        ['hello', { message: 'world' }],
        //@ts-expect-error
        ['a', 'foo'],
        //@ts-expect-error
        ['x', 'foo'],
      ]),
    ).toBe(true);
  });

  test('fails when given object does not contain entries', () => {
    expect(
      predicate(data, [
        ['a', 'qux'],
        ['b', 'foo'],
        //@ts-expect-error
        ['x', 'foo'],
      ]),
    ).toBe(false);
  });
});