import {IThemeProps} from "../theme";
import {css} from "../styled-components";
export default css`
  font-weight: normal;
  font-family: ${(p: IThemeProps) => p.theme.font.family};
  color: ${(p: IThemeProps) => p.theme.colors.text};
  text-transform: uppercase;
`
