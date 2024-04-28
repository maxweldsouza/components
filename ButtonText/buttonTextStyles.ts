import {css} from "../styled-components";
import {IThemeProps} from "../theme";

export default css`
  color: ${(p: IThemeProps) => p.theme.colors.revText};
  text-align: center;
`
