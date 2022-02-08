import { useState } from 'react';

import { generateColor } from 'shared/utils';

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

  return (
    <RepositoryContainer
      color={color}
      onMouseEnter={() => setStyle({ display: 'block' })}
      onMouseLeave={() => setStyle({ display: 'none' })}
    >
      <TextContainer>
        <Frontmatter owner={owner} name={name} />
        <Info owner={owner} name={name} />
      </TextContainer>

      <Trash
        style={style}
        handleClick={() => handleRemoveRepository(owner, name)}
      />
    </RepositoryContainer>
  );
};
