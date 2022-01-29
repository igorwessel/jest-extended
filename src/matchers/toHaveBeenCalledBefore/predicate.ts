const smallest = (ns: number[]) => ns.reduce((acc, n) => (acc < n ? acc : n));

export default (firstInvocationCallOrder: number[], secondInvocationCallOrder?: number[]): boolean => {
  if (firstInvocationCallOrder.length === 0) return false;
  if (secondInvocationCallOrder === undefined || secondInvocationCallOrder!.length === 0) return true;

  const firstSmallest = smallest(firstInvocationCallOrder);
  const secondSmallest = smallest(secondInvocationCallOrder);

  return firstSmallest < secondSmallest;
};
