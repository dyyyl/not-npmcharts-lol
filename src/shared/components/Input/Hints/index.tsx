import { OctokitRepository } from 'shared/types';
import { HintItem } from './HintItem';

import { HintsContainer } from './HintsContainer';

interface HintsProps {
  hints: Array<OctokitRepository>;
}

/**
 * Hints to users any relevant repositories based on search query.
 * @param hints - array of repositpories
 * @returns ListBox of repositories to hint to users
 */
export const Hints = ({ hints }: HintsProps) => (
  <HintsContainer>
    {hints &&
      hints.map((repository: OctokitRepository) => (
        <HintItem
          key={repository?.node_id}
          onClick={() => console.log({ repository })}
        >
          {repository?.owner.login}/{repository?.name}
        </HintItem>
      ))}
  </HintsContainer>
);
