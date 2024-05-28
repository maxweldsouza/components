import { css } from '../styled-components';
import { IThemeProps } from '../theme';

export default css`
  text-align: center;
  color: ${(p: IThemeProps) =>
    p.$secondary ? p.theme.colors.text : p.theme.colors.revText};
`;
