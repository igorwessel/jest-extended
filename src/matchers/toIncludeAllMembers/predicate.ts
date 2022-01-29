import { contains } from '../../utils';

export default (array: any[], set: any[]) => {
  return Array.isArray(array) && Array.isArray(set) && set.every(val => contains(array, val));
};
