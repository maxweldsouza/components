import {css} from "../styled-components";
import {IThemeProps} from "../theme";

export default css`
  display: flex;
  gap: ${(p: IThemeProps) => p.theme.spacing.sm};
  flex-direction: column;
`
