import { css } from '../styled-components';
import { IThemeProps } from '../theme';

// display: block;
// font-size: 1rem;
export default css`
  border-radius: ${(p) => p.theme.borderRadius.sm};
  box-shadow: none;
  border: none;
  background-color: ${(p) =>
    p.$error ? p.theme.colors.errorBackground : p.theme.colors.background3};
  max-width: 100%;
  width: 100%;
  padding: ${(p) => p.theme.spacing.md} ${(p) => p.theme.spacing.md};
  color: ${(p) => p.theme.colors.text};
`;
