import { getType } from 'jest-get-type';

export default (expected: any): boolean => getType(expected) === 'object' && Object.keys(expected).length === 0;
