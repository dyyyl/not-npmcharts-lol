import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Input, Prompt, Repository } from 'shared/components';
import { Main, SideNav } from 'shared/layouts';
import { getRepositories } from 'shared/queries';
import { normalizedRepositoryRegex } from 'shared/regexes';
import { GlobalStyles } from 'shared/styles/GlobalStyles';
import {
  generateRepositoryString,
  generateRepositoryTuples,
} from 'shared/utils';

/**
 * General, top-level properties of Application.
 */
interface AppProps {
  /**
   * We only really care whether or not the url is valid for routing.
   */
  wrongUrl: boolean;
}

export const App = ({ wrongUrl }: AppProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Original source of truth for the repositories listed in url.
  const repositories =
    pathname !== '/' // if pathname is not '/'
      ? generateRepositoryTuples(pathname)
      : null; // otherwise, set repositories to null

  useEffect(() => {
    // General safeguard against incorrect URL: if the URL is not a valid,
    // normalized repository string, redirect to an initial state.
    if (wrongUrl) {
      navigate('/');
    }
  }, [pathname, navigate, wrongUrl]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget); // yeet form data
    // for this next bit, just assume that the input is not-null (it's a required field)
    const repository = (formData.get('repository') as string)!.split('-');

    if (!normalizedRepositoryRegex.test(repository.join('-'))) {
      navigate('/wrong-lol');
      return;
    }

    // Are repositories already set? Let's add the new one to the list.
    const repositoryArray = repositories
      ? [...repositories, repository]
      : [repository]; // otherwise, fill the array with the new repo

    // Normalize the array of repositories into coherent string.
    const repositoryString = generateRepositoryString(repositoryArray);

    console.log(getRepositories(repository[1]));

    navigate(`/${repositoryString}`); // shunt user to the next url state
  };

  const handleRemoveRepository = (owner: string, name: string): void => {
    const repository = `${owner}-${name}`;

    const repositoryArray = repositories!
      .map((tuple) => `${tuple[0]}-${tuple[1]}`)
      .filter((repo) => repo !== repository)
      .map((repositoryString) => repositoryString.split('-'));

    const repositoryString = generateRepositoryString(repositoryArray);

    navigate(`/${repositoryString}`); // shunt user to the next url state
  };

  return (
    <Main>
      <div>
        <h1>GRID</h1>
      </div>
      <SideNav>
        <Input handleSubmit={handleSubmit} name="repository" />
        {repositories ? (
          repositories.map((repository) => (
            <Repository
              key={repository[1]}
              owner={repository[0]}
              name={repository[1]}
              handleRemoveRepository={handleRemoveRepository}
            />
          ))
        ) : (
          <Prompt />
        )}
      </SideNav>
      <GlobalStyles />
    </Main>
  );
};
