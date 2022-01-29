import { equals } from 'expect/build/jasmineUtils';

export const contains = (list: unknown[], value: unknown): boolean => {
  return list.findIndex(item => equals(item, value)) > -1;
};

export const determinePropertyMessage = <T extends { [key: string]: any }>(
  actual: T,
  property: string,
  message = 'Not Accessible',
): T[keyof T] => {
  return actual && Object.hasOwnProperty.call(actual, property) ? actual[property] : message;
};

//TODO: need type this
export const isJestMockOrSpy = (value: any): value is jest.Mock => {
  return !!(value && value._isMockFunction === true && typeof value.mock === 'object');
};

export { equals };
