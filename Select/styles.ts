import { css } from '../styled-components';
import { IThemeProps } from '../theme';

export default css`
  border: none;
  background-color: ${(p: IThemeProps) => p.theme.colors.background2};
  border-radius: ${(p: IThemeProps) => p.theme.borderRadius.md};
  padding: ${(p: IThemeProps) => p.theme.spacing.md}
    ${(p: IThemeProps) => p.theme.spacing.sm};
  color: ${(p: IThemeProps) => p.theme.colors.text};
`;
