export default <T extends {}>(actual: T, values: Array<keyof T>) =>
  values.some(value => Object.prototype.hasOwnProperty.call(actual, value));
