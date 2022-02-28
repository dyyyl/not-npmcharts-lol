import styled from 'styled-components/macro';

interface HintItemProps {
  active: boolean;
}

export const HintItem = styled.li<HintItemProps>`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 1rem 2.4rem;

  ${({ active }) => active && 'background-color: #ececf6;'}

  &:hover {
    cursor: pointer;
    background: #ececf6;
  }
`;
