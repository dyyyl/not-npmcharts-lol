import { octokit } from 'shared/api';

/**
 * Hook for fetching specific repository data.
 * @param owner owner of the repository
 * @param name name of the repository
 * @returns Repository data specified by owner and name
 */
export const getRepository = async (owner: string, name: string) => {
  const data = await octokit.rest.repos.get({
    owner,
    repo: name,
  });

  return data;
};
