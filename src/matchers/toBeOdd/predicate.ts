export default (expected: number | string) => !isNaN(parseInt(expected as string)) && (expected as number) % 2 === 1;
