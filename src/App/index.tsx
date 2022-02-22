import { useLocation, useNavigate } from 'react-router-dom';

import { Input, Prompt, Repository } from 'shared/components';
import { useRemoveRepository, useSubmit } from 'shared/hooks';
import { Main, SideNav } from 'shared/layouts';
import { GlobalStyles } from 'shared/styles/GlobalStyles';
import { generateRepositoryTuples } from 'shared/utils';

export const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Original source of truth for the repositories listed in url.
  const repositories =
    pathname !== '/' // if pathname is not '/'
      ? generateRepositoryTuples(pathname)
      : null; // otherwise, set repositories to null

  /**
   * First partial application of useSubmit.
   * @param {React.RefObject<HTMLFormElement>} formRef - React ref for the form element.
   */
  const makeHandleSubmit = useSubmit(repositories, navigate);

  /**
   * First and only partial application of useRemoveRepository.
   * @param {string} owner - The owner of the repository.
   * @param {string} name - The name of the repository.
   */
  const handleRemoveRepository = useRemoveRepository(repositories, navigate);

  return (
    <Main>
      <div>
        <h1>GRID</h1>
      </div>
      <SideNav>
        <Input makeHandleSubmit={makeHandleSubmit} name="repository" />
        {repositories ? (
          repositories.map(([owner, name]) => (
            <Repository
              key={`${owner}-${name}`}
              owner={owner}
              name={name}
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
