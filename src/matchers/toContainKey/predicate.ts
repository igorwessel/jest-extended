export default (obj: {}, key: string | number | symbol) =>
  obj.hasOwnProperty && Object.prototype.hasOwnProperty.call(obj, key);
