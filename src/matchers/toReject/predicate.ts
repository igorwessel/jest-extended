export default (promise: Promise<unknown>) =>
  promise.then(
    () => false,
    () => true,
  );
