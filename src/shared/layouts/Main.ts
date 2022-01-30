import styled from 'styled-components/macro';

export const Main = styled.main`
  height: 100%;
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr;

  @media screen and (min-width: 1090px) {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
  }
`;
