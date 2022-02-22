import { OctokitRepository } from 'shared/types';
import { HintItem } from './HintItem';

import { HintsContainer } from './HintsContainer';

interface HintsProps {
  hints: any;
}

/**
 * Hints to users any relevant repositories based on search query.
 * @param hints - array of repositpories
 * @returns ListBox of repositories to hint to users
 */
export const Hints = ({ hints }: HintsProps) => (
  <HintsContainer>
    {hints &&
      hints.data?.items.map((repository: OctokitRepository) => (
        <HintItem key={repository?.node_id}>
          {repository?.owner.login}/{repository?.name}
        </HintItem>
      ))}
  </HintsContainer>
);
