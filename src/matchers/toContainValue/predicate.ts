import { contains } from '../../utils';

export default (actual: { [key: string]: unknown }, value: any) => {
  const objectValues = Object.keys(actual).map(k => actual[k]);
  return contains(objectValues, value);
};
