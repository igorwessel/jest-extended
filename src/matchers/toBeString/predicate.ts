export default (expected: unknown): boolean => {
  return typeof expected === 'string' || expected instanceof String;
};
