import { contains } from '../../utils';

export default <T = {}>(object: T, keys: Array<keyof T>): boolean => {
  const objectKeys = Object.keys(object);

  return objectKeys.length === keys.length && keys.every(key => contains(objectKeys, key));
};
