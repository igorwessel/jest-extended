import { getType } from 'jest-get-type';

const isValidDate = (value: unknown): boolean =>
  getType(value) === 'date' && !isNaN(value as number) && !isNaN((value as Date).getTime());

export default isValidDate;
