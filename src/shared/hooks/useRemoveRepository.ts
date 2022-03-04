import { NavigateFunction } from 'react-router-dom';

import { Tuple } from 'shared/types';
import { generateRepositoryString } from 'shared/utils';

/**
 * Remove a repository from the list of repositories, Partially Applied.
 * @param {string} graphData - Array of data to graph.
 * @param {string} setGraphData - You known what this is.
 * @param {string} repositories - The source of truth for all Repositories.
 * @param {string} navigate - The navigation function.
 */
export const useRemoveRepository =
  (
    graphData: Array<Record<string, unknown>>,
    setGraphData: any,
    repositories: Array<Tuple> | null,
    navigate: NavigateFunction,
  ) =>
  (owner: string, name: string): void => {
    const repository = `${owner}_${name}`;

    // Remove from graphable data.
    const newGraphData = graphData.filter((data) => data.id !== repository);
    setGraphData(newGraphData);

    // If replositories are not set, then there is nothing to remove.
    const repositoryArray = repositories!
      .map((tuple) => tuple.join('_'))
      .filter((repo) => repo !== repository) // otherwise, filter out repo to be removed
      .map((repositoryString) => repositoryString.split('_') as Tuple); // normalize into repositories tuples

    const repositoryString = generateRepositoryString(repositoryArray);

    navigate(`/${repositoryString}`); // shunt user to the next url state
  };
