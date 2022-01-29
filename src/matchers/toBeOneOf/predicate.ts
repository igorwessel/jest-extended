import { contains } from '../../utils';

export default <T>(value: T, list: T[]) => contains(list, value);
