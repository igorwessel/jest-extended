const isDateString = (value: any): boolean => !isNaN(Date.parse(value));

export default isDateString;
