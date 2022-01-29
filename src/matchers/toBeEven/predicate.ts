const isNumber = (expected: any): boolean => !isNaN(parseInt(expected));
const isEven = (expected: any): boolean => expected % 2 === 0;
export default (expected: any): boolean => isNumber(expected) && isEven(expected);
