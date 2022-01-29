function toBeBetween(received: any, startDate: Date, endDate: Date): boolean {
  return received >= startDate && received <= endDate;
}

export default (received: any, startDate: Date, endDate: Date): boolean => toBeBetween(received, startDate, endDate);
