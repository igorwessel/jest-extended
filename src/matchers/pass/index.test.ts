import * as matcher from './';

expect.extend(matcher);

describe('.pass', () => {
  test('passes without message', () => {
    expect(1).pass();
  });
  test('passes with message', () => {
    expect(1).pass('this should pass!');
  });
});

describe('.not.pass', () => {
  test('does not pass, has no message', () => {
    expect(() => expect(1).not.pass()).toThrowErrorMatchingSnapshot();
  });
  test('does not.pass, has no message', () => {
    expect(() => expect(1).not.pass('This should not pass!')).toThrowErrorMatchingSnapshot();
  });
});