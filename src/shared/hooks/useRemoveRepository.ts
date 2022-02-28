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
    const repository = `${owner}_${name}`;

    // If replositories are not set, then there is nothing to remove.
    const repositoryArray = repositories!
      .map((tuple) => tuple.join('_'))
      .filter((repo) => repo !== repository) // otherwise, filter out repo to be removed
      .map((repositoryString) => repositoryString.split('_') as Tuple); // normalize into repositories tuples

    const repositoryString = generateRepositoryString(repositoryArray);

    navigate(`/${repositoryString}`); // shunt user to the next url state
  };
