export default (mockFn: jest.MockInstance<unknown, unknown[]>): boolean => mockFn.mock.calls.length === 1;
