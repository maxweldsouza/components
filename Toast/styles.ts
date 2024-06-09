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
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transition: transform 1000ms ease-in-out, opacity 1000ms ease-in-out;
`;
/*
  &:hover {
  }
 */
