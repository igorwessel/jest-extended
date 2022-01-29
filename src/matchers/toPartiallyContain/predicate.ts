import toIncludeAllPartialMembers from '../toIncludeAllPartialMembers/predicate';

export default <E = any>(array: { [key: string]: any }[], item: E) => toIncludeAllPartialMembers(array, [item]);
