function toBeBefore(date: Date, before: Date): boolean {
  return date < before;
}

export default (date: Date, before: Date): boolean => toBeBefore(date, before);
