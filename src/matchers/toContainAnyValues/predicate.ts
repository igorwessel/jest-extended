import { contains } from '../../utils';

/**
 * @params {Object} object
 * @params {Array} values
 */
export default (object: { [key: string]: unknown }, values: any[]) => {
  const objectValues = Object.keys(object).map(k => object[k]);
  return values.some(value => contains(objectValues, value));
};
