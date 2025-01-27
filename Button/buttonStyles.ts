import { IThemeProps } from "../theme";
import { css } from "../styled-components";

function getBackground(p) {
  if (p.$secondary) {
    return p.theme.colors.background2;
  }
  return p.theme.colors.buttonBackground;
}

function getHoverBackground(p) {
  if (p.disabled) {
    return p.theme.colors.background2;
  }
  if (p.$secondary) {
    return p.theme.colors.background;
  }
  return p.theme.colors.buttonHover;
}
export default css`
  border-radius: ${(p) => p.theme.borderRadius.sm};
  padding: ${(p: IThemeProps) => p.theme.spacing.md};
  border: none;
  width: max-content;
  background: ${getBackground};
  color: ${(p) => (p.$secondary ? p.theme.colors.text : p.theme.colors.text)};
  font-size: 1.4rem;
  &:hover {
    background: ${getHoverBackground};
  }
  @media (prefers-reduced-motion) {
    transition: none;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
