function toBeBeforeOrEqualTo(date: Date, before: Date): boolean {
  return date <= before;
}

export default (date: Date, before: Date): boolean => toBeBeforeOrEqualTo(date, before);
