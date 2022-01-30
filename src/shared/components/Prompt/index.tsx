import { Search } from 'react-feather';
import { CuteText } from './CuteText';

import { PromptContainer } from './PromptContainer';

export const Prompt = () => (
  <PromptContainer>
    <Search style={{ placeSelf: 'center', color: '#BCBCF2' }} size={50} />
    <CuteText>Search for a GitHub repository to populate the graph</CuteText>
  </PromptContainer>
);
