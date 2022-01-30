import styled from 'styled-components/macro';

interface StyleProps {
  color: string;
}

export const RepositoryContainer = styled.section<StyleProps>`
  background: #272736;
  border-radius: 0.4rem;
  padding: 1.6rem 2.4rem;
  border-left: 0.6rem solid ${(props) => props.color};
  display: grid;
  grid-template-columns: 1fr 3rem;
  gap: 1.5rem;

  &:hover {
    cursor: pointer;
    background: #2f2f3f;
  }
`;
