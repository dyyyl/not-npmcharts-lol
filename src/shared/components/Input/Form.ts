import styled from 'styled-components/macro';

interface FormProps {
  showHints: boolean;
}

export const Form = styled.form<FormProps>`
  /* in order for Hints to be positioned absolutely in reference to this parent,
    we must apply position relative here. */
  position: relative;
  display: grid;
  grid-template-columns: 1fr max-content;
  gap: 1rem;
  background: #ffffff;

  ${({ showHints }) => !showHints && `border-radius: 0.4rem;`}
`;
