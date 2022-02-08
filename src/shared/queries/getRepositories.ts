import { octokit } from 'shared/api';

export const getRepositories = async (q: string) => {
  const data = await octokit.rest.search.repos({
    q,
    per_page: 6,
    sort: 'stars',
  });

  return data;
};
