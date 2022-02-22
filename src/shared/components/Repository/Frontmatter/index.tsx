import { Name } from './Name';
import { Owner } from './Owner';
import { FrontmatterContainer } from './FrontmatterContainer';

interface FrontmatterProps {
  owner: string;
  name: string;
}

/**
 * Heading of a repository card.
 * @param {string} owner - Owner of repository
 * @param {string} name - Name of repository
 */
export const Frontmatter = ({ owner, name }: FrontmatterProps): JSX.Element => {
  return (
    <FrontmatterContainer>
      <Owner>{owner} /</Owner>
      <Name>{name}</Name>
    </FrontmatterContainer>
  );
};
