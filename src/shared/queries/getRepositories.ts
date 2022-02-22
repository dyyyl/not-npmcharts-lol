import { octokit } from 'shared/api';

/**
 * Hook to get the first six repositories that match some query.
 * Purpose built to to fill in hints for user search.
 * @param q Query to search for repositories
 * @returns a list of repository data
 */
export const getRepositories = (q: string) =>
  octokit.rest.search.repos({
    q,
    per_page: 6,
    sort: 'stars',
  });
