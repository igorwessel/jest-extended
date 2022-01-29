function toBeAfterOrEqualTo(received: any, after: Date): boolean {
  return received >= after;
}

export default (received: any, after: Date): boolean => toBeAfterOrEqualTo(received, after);
