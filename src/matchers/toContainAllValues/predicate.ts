import { contains } from '../../utils';

export default <T extends { [key: string]: any }>(object: T, values: Array<T[keyof T]>): boolean => {
  const objectValues = Object.keys(object).map(k => object[k]);
  return objectValues.length === values.length && objectValues.every(objectValue => contains(values, objectValue));
};
