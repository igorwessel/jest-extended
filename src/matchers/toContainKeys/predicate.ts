export default <T extends {}>(obj: T, keys: Array<keyof T>) =>
  keys.every(key => obj && obj.hasOwnProperty && Object.prototype.hasOwnProperty.call(obj, key));
