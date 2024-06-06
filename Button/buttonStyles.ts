import { IThemeProps } from '../theme';
import { css } from '../styled-components';

export default css`
  border-radius: ${(p) => p.theme.borderRadius.sm};
  padding: ${(p: IThemeProps) => p.theme.spacing.md};
  border: none;
  width: max-content;
  background: ${(p) =>
    p.$secondary
      ? p.theme.colors.background2
      : p.theme.colors.buttonBackground};
  color: ${(p) => (p.$secondary ? p.theme.colors.text : p.theme.colors.text)};
  &:hover {
    background: ${(p) =>
      p.$secondary
        ? p.theme.colors.background
        : p.theme.colors.buttonBackground};
  }
  @media (prefers-reduced-motion) {
    transition: none;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
