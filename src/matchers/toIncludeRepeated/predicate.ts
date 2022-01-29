export default (string: string, substring: string, occurrences: number): boolean =>
  (string.match(new RegExp(substring, 'g')) || []).length === occurrences;
