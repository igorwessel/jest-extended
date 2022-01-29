import { equals } from '../../utils';

export default <T extends {}>(obj: T, [key, value]: [keyof T, T[keyof T]]) =>
  obj.hasOwnProperty && Object.prototype.hasOwnProperty.call(obj, key) && equals(obj[key], value);
