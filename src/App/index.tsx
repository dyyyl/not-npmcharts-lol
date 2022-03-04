import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Graph, Input, Prompt, Repository } from 'shared/components';
import { useRemoveRepository, useSubmit } from 'shared/hooks';
import { getCommits } from 'shared/queries';
import { Main, SideNav } from 'shared/layouts';
import { GlobalStyles } from 'shared/styles/GlobalStyles';
import { generateColor, generateRepositoryTuples } from 'shared/utils';

export const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [graphData, setGraphData] = useState([]);

  // Original source of truth for the repositories listed in url.
  const repositories =
    pathname !== '/' // if pathname is not '/'
      ? generateRepositoryTuples(pathname)
      : null; // otherwise, set repositories to null

  /**
   * First partial application of useSubmit.
   * @param {string} repositories - The source of truth for all Repositories.
   * @param {string} navigate - The navigation function.
   */
  const makeHandleSubmit = useSubmit(repositories, navigate);

  /**
   * First and only partial application of useRemoveRepository.
   * @param {string} graphData - The source of truth for all graphable data.
   * @param {string} setGraphData - What you set graph data with.
   * @param {string} repositories - The source of truth for all Repositories.
   * @param {string} navigate - The navigation function.
   */
  const handleRemoveRepository = useRemoveRepository(
    graphData,
    setGraphData,
    repositories,
    navigate,
  );

  /**
   * I exist entirely for the purpose of async await-ing in a useEffect.
   * @param owner - The owner of the repository.
   * @param name - The name of the repository.
   */
  const fetchCommits = async (owner: string, name: string) => {
    // Get the data.
    const { data } = await getCommits(owner, name);

    // Normalize the data.
    const graphObject = {
      id: `${owner}_${name}`,
      color: generateColor(`${owner}_${name}`),
      // @ts-ignore
      data: data.map((commits: any, index) => {
        return {
          x: index + 1,
          y: commits.total,
        };
      }),
    };

    // @ts-ignore
    setGraphData((previous) => [...previous, graphObject]);
  };

  // Fetch repository data on mount.
  useEffect(() => {
    repositories?.forEach(([owner, name]) => {
      if (!graphData.find((repo: any) => repo.id === `${owner}_${name}`)) {
        fetchCommits(owner, name);
      }
    });
  }, [graphData, repositories]);

  return (
    <Main>
      <Graph data={graphData} />
      <SideNav>
        <Input makeHandleSubmit={makeHandleSubmit} name="repository" />
        {repositories ? (
          repositories.map(([owner, name]) => (
            <Repository
              key={`${owner}_${name}`}
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
