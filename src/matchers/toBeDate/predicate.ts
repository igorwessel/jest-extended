import { getType } from 'jest-get-type';

const isDate = (value: any): boolean => getType(value) === 'date' && !isNaN(value);

export default isDate;
