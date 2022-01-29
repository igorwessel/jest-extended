import toContainEntries from '../toContainEntries/predicate';

export default (array: unknown[], set: unknown[]) =>
  Array.isArray(array) &&
  Array.isArray(set) &&
  set.every(partial => array.some(value => toContainEntries(value, Object.entries(partial))));
