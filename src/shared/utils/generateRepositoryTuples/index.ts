import { Tuple } from 'shared/types';

const normalizeRepository = (repository: string): Tuple => {
  const [owner, repo] = repository.split('_'); // we don't want to strip dashes from repo names
  return [owner, repo]; // return the tuple
};

const normalizeRepositories = (tuple: Tuple): boolean => {
  const [owner, repo] = tuple; // really, we just need to know both elements exist
  return owner && repo ? true : false;
};

export const generateRepositoryTuples = (pathname: string): Array<Tuple> =>
  pathname
    .substring(1) // remove the leading '/'
    .split(',') // split the pathname into an array of strings
    .map(normalizeRepository)
    .filter(normalizeRepositories);
