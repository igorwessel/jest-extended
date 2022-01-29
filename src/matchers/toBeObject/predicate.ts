import { getType } from 'jest-get-type';

export default (expected: unknown): boolean => getType(expected) === 'object';
