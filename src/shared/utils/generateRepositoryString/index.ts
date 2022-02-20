import { Tuple } from 'shared/types';

export const generateRepositoryString = (repositoryTupleArray: Array<Tuple>) =>
  repositoryTupleArray.map((repository) => repository.join('_')).join(',');
