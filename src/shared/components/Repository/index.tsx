import { useEffect, useState } from 'react';

import { getRepository } from 'shared/queries';
import { generateColor } from 'shared/utils';
import { RepositoryResponse } from 'shared/types';

import { RepositoryContainer } from './RepositoryContainer';
import { Frontmatter } from './Frontmatter';
import { Info } from './Info';
import { TextContainer } from './TextContainer';
import { Trash } from './Trash';

interface RepositoryProps {
  owner: string;
  name: string;
  handleRemoveRepository: (owner: string, name: string) => void;
}

export const Repository = ({
  owner,
  name,
  handleRemoveRepository,
}: RepositoryProps) => {
  const color = generateColor(`${owner}/${name}`);
  const [style, setStyle] = useState({ display: 'none' });

  const [repository, setRepository] = useState<RepositoryResponse>();

  useEffect(() => {
    getRepository(owner, name)
      .then((repo) => setRepository(repo as RepositoryResponse))
      .catch((error) => console.error(error));
  }, [owner, name]);

  return (
    <RepositoryContainer
      color={color}
      onMouseEnter={() => setStyle({ display: 'block' })}
      onMouseLeave={() => setStyle({ display: 'none' })}
    >
      <TextContainer
        href={repository?.data?.html_url}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Frontmatter owner={owner} name={name} />
        <Info repository={repository} />
      </TextContainer>

      <Trash style={style} handleClick={() => handleRemoveRepository(owner, name)} />
    </RepositoryContainer>
  );
};
