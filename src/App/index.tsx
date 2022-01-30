import { useLocation, useNavigate } from 'react-router-dom';

import { Input } from 'shared/components/Input';
import { Prompt } from 'shared/components/Prompt';
import { Repository } from 'shared/components/Repository';

import { Main } from 'shared/layouts/Main';
import { SideNav } from 'shared/layouts/SideNav';

import { GlobalStyles } from 'shared/styles/GlobalStyles';

export const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const repositories =
    pathname !== '/'
      ? pathname
          .substring(1)
          .split(',')
          .map((repository) => repository.split('-'))
      : null;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const repository = (formData.get('repository') as string)!.split('-');

    const repositoryArray = [
      ...(repositories as Array<Array<string>>),
      repository,
    ];

    const repositoryString = repositoryArray
      .map((repository) => repository.join('-'))
      .join(',');

    navigate(`/${repositoryString}`);
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
