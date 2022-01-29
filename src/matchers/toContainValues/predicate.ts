import { contains } from '../../utils';

export default (object: { [key: string]: unknown }, values: unknown[]): boolean => {
  const objectValues = Object.keys(object).map(k => object[k]);
  return values.every(value => contains(objectValues, value));
};
