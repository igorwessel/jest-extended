export default (actual: string, values: string[]): boolean => {
  return values.every(value => actual.includes(value));
};
