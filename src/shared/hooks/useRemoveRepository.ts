import { NavigateFunction } from 'react-router-dom';

import { Tuple } from 'shared/types';
import { generateRepositoryString } from 'shared/utils';

/**
 * Remove a repository from the list of repositories, Partially Applied.
 * @param owner account name of the repository owner
 * @param name name of the repository
 */
export const useRemoveRepository =
  (repositories: Array<Tuple> | null, navigate: NavigateFunction) =>
  (owner: string, name: string): void => {
    const repository = `${owner}-${name}`;

    const repositoryArray = repositories!
      .map(([tupleOwner, tupleName]) => `${tupleOwner}-${tupleName}`)
      .filter((repo) => repo !== repository)
      .map((repositoryString) => repositoryString.split('-') as Tuple);

    const repositoryString = generateRepositoryString(repositoryArray);

    navigate(`/${repositoryString}`); // shunt user to the next url state
  };
