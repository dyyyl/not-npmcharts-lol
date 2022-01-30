import styled from 'styled-components/macro';

/**
 * I mean, it's really a `TrashContainer` but I thought this fit better
 */
export const TrashBin = styled.div`
  padding: 0.5rem;
  border-radius: 0.4rem;
  place-self: center;

  &:hover {
    cursor: pointer;
    background: #45455e;
  }
`;
