import {css} from "../styled-components";
import {IThemeProps} from "../theme";

export default css`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${(p: IThemeProps) => p.theme.spacing.lg};
  gap: ${(p: IThemeProps) => p.theme.spacing.lg};
  background-color: ${(p: IThemeProps) => p.theme.colors.background};
  color: ${(p) => p.theme.colors.text};
  height: 100%;
`
