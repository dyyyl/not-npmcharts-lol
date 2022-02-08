import { octokit } from 'shared/api';

export const getRepository = async (owner: string, name: string) => {
  const data = await octokit.rest.repos.get({
    owner,
    repo: name,
  });

  return data;
};
