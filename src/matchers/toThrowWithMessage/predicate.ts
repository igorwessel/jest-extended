export default (error: unknown, type: TypeErrorConstructor, message: string | RegExp) => {
  if (message instanceof RegExp) {
    return error && error instanceof type && message.test(error.message);
  }
  return error && error instanceof type && error.message === message;
};
