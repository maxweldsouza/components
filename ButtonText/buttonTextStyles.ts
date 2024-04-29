import {css} from "../styled-components";
import {IThemeProps} from "../theme";

export default css`
  text-align: center;
  ${(p) => p.secondary ? `
      color: ${(p: IThemeProps) => p.theme.colors.text};
  ` : `
      color: ${(p: IThemeProps) => p.theme.colors.revText};
  `}
`
