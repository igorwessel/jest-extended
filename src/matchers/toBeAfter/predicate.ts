function toBeAfter(date: any, after: Date) {
  return date > after;
}

export default (date: any, after: Date): boolean => toBeAfter(date, after);
