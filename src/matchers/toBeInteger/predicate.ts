const isNumber = (value: any) => !isNaN(parseInt(value));
const isInteger = (value: any) => Number.isInteger(+value);

export default (value: any) => isNumber(value) && isInteger(value);
