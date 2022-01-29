const smallest = (ns: number[]) => ns.reduce((acc, n) => (acc < n ? acc : n));

export default (firstInvocationCallOrder: number[], secondInvocationCallOrder?: number[]): boolean => {
  if (firstInvocationCallOrder.length === 0) return true;
  if (secondInvocationCallOrder === undefined || secondInvocationCallOrder!.length === 0) return false;

  const firstSmallest = smallest(firstInvocationCallOrder);
  const secondSmallest = smallest(secondInvocationCallOrder);

  return firstSmallest > secondSmallest;
};
