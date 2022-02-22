import styled from 'styled-components/macro';

interface InputFieldProps {
  showHints: boolean;
}

export const InputField = styled.input<InputFieldProps>`
  height: 6rem;
  width: 100%;
  font-size: 1.6rem;
  color: #37374a;
  padding-left: 2.4rem;
  border: none;
  z-index: 100;
  ${({ showHints }) =>
    !showHints &&
    `
      border-top-left-radius: 0.4rem;
      border-bottom-left-radius: 0.4rem;
  `}
`;
