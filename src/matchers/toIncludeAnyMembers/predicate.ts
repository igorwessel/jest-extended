import { contains } from '../../utils';

export default (array: any[], members: any[]): boolean => {
  return Array.isArray(array) && Array.isArray(members) && members.some(member => contains(array, member));
};
