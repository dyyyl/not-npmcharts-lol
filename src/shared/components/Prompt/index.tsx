import { Search } from 'react-feather';
import { CuteText } from './CuteText';

import { PromptContainer } from './PromptContainer';

/**
 * Call to action to search for a repository.
 */
export const Prompt = (): JSX.Element => (
  <PromptContainer>
    <Search style={{ placeSelf: 'center', color: '#BCBCF2' }} size={50} />
    <CuteText>Search for a GitHub repository to populate the graph</CuteText>
  </PromptContainer>
);
