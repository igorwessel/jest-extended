const isNumber = (value: any) => !isNaN(parseInt(value));
const isNegative = (value: any) => value < 0;

export default (value: any) => isNumber(value) && isNegative(value);
