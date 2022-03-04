import { octokit } from 'shared/api';

/**
 * Hook for fetching specific repository commit data.
 * @param owner owner of the repository
 * @param name name of the repository
 * @returns Commit data specified by owner and name
 */
export const getCommits = async (owner: string, name: string) => {
  const data = await octokit.rest.repos.getCommitActivityStats({
    owner,
    repo: name,
  });

  return data;
};
