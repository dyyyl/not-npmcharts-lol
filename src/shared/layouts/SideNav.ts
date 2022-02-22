import styled from 'styled-components/macro';

export const SideNav = styled.div`
  background: #37374a;
  padding: 8rem 3.2rem 2rem 3.2rem; /* weird numbers, refer to Figma */
  display: grid;
  grid-auto-rows: max-content;
  gap: 2.5rem; /* Admittedly fudged some magic numbers as well 😅 */
  overflow-y: auto;
`;
