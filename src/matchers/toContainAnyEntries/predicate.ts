import { contains } from '../../utils';

export default <T extends { [key: string]: any }>(object: T, entries: Array<[keyof T, T[keyof T]]>) => {
  const objectEntries = Object.keys(object).map(k => [k, object[k]]);
  return entries.some(entry => contains(objectEntries, entry));
};
