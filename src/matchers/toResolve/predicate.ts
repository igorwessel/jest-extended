export default (promise: Promise<unknown>) =>
  promise.then(
    () => true,
    () => false,
  );
