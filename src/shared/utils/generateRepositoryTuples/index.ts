// import { normalizedRepositoryRegex } from 'shared/regexes';
import { Tuple } from 'shared/types';

const normalizeRepository = (repository: string): Tuple => {
  const [owner, ...rest] = repository.split('-'); // we don't want to strip dashes from repo names
  const name = rest.join('-'); // so stictch those back together if relevant
  return [owner, name]; // return the tuple
};

// const normalizeRepositories = (tuple: Tuple): boolean => {
//   console.log(normalizedRepositoryRegex.test(tuple.join('-')));
//   return normalizedRepositoryRegex.test(tuple.join('-'));
// };

export const generateRepositoryTuples = (pathname: string): Array<Tuple> =>
  pathname
    .substring(1) // remove the leading '/'
    .split(',') // split the pathname into an array of strings
    .map(normalizeRepository);
// .filter(normalizeRepositories); // TODO remove duplicates (Map?)
