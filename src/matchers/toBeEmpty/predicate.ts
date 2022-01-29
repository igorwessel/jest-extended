import { equals } from '../../utils';

const isEmptyIterable = (value: any) => {
  if (typeof value[Symbol.iterator] !== 'function') {
    return false;
  }
  const firstIteration = value[Symbol.iterator]().next();
  return firstIteration.done;
};

export default (value: any) => equals({}, value) || isEmptyIterable(value);
