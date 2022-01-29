import toContainEntry from '../toContainEntry/predicate';

export default <T = {}>(obj: T, entries: Array<[keyof T, T[keyof T]]>) =>
  entries.every(entry => toContainEntry(obj, entry));
