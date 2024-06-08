import styled from 'styled-components';

const TextButton = styled.button`
  background: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
  color: ${(p) => p.theme.colors.text};
`;

export default TextButton;
