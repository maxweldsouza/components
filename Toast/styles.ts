import { css } from 'styled-components';

export default css`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: ${(p) => p.theme.colors.background};
  background-color: ${(p) => p.theme.colors.text};
  font-size: ${(p) => p.theme.font.size.md};
  padding: ${(p) => p.theme.spacing.md};
  border-radius: ${(p) => p.theme.borderRadius.md};
`;
/*
  &:hover {
  }
 */
