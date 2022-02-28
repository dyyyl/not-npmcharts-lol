import { OctokitRepository } from 'shared/types';
import { HintItem } from './HintItem';
import { HintName } from './HintName';
import { HintOwner } from './HintOwner';

import { HintsContainer } from './HintsContainer';

interface HintsProps {
  hints: Array<OctokitRepository>;
  activeHint: number;
  setActiveHint: (index: number) => void;
  triggerSubmit: () => void;
}

/**
 * Hints to users any relevant repositories based on search query.
 * @param hints - array of repositpories
 * @returns ListBox of repositories to hint to users
 */
export const Hints = ({
  hints,
  activeHint,
  setActiveHint,
  triggerSubmit,
}: HintsProps) => (
  <HintsContainer>
    {hints.map((repository: OctokitRepository, index) => {
      return (
        <HintItem
          key={repository?.node_id}
          active={activeHint === index}
          onClick={triggerSubmit}
          onMouseEnter={() => setActiveHint(index)}
        >
          <HintOwner>{repository?.owner.login}</HintOwner>/
          <HintName>{repository?.name}</HintName>
        </HintItem>
      );
    })}
  </HintsContainer>
);
