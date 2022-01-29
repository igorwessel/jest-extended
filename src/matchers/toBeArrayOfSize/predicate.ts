import toBeArray from '../toBeArray/predicate';

/**
 * @param {*} received
 * @param {Number} size
 * @returns {Boolean}
 */
export default (received: any[], size?: number): boolean => toBeArray(received) && received.length === size;
