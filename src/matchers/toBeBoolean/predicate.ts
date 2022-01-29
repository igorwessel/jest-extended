export default (received: any): boolean => {
  return typeof received === 'boolean' || received instanceof Boolean;
};
