import { Name } from './Name';
import { Owner } from './Owner';
import { FrontmatterContainer } from './FrontmatterContainer';

interface FrontmatterProps {
  owner: string;
  name: string;
}

export const Frontmatter = ({ owner, name }: FrontmatterProps) => {
  return (
    <FrontmatterContainer>
      <Owner>{owner} /</Owner>
      <Name>{name}</Name>
    </FrontmatterContainer>
  );
};
