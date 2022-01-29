export default (expected: unknown) => !isNaN(expected as number) && expected !== Infinity && (expected as number) > 0;
