import { useState } from 'react';

import { generateColor } from 'shared/utils/generateColor';

import { RepositoryContainer } from './RepositoryContainer';
import { Frontmatter } from './Frontmatter';
import { Info } from './Info';
import { TextContainer } from './TextContainer';
import { Trash } from './Trash';

interface RepositoryProps {
  owner: string;
  name: string;
}

export const Repository = ({ owner, name }: RepositoryProps) => {
  const color = generateColor(`${owner}/${name}`);
  const [style, setStyle] = useState({ display: 'none' });

  const handleClick = () => alert('Closed');

  return (
    <RepositoryContainer
      color={color}
      onMouseEnter={() => setStyle({ display: 'block' })}
      onMouseLeave={() => setStyle({ display: 'none' })}
    >
      <TextContainer>
        <Frontmatter owner={owner} name={name} />
        <Info stars="148k" lastUpdated={5} />
      </TextContainer>

      <Trash style={style} handleClick={handleClick} />
    </RepositoryContainer>
  );
};
