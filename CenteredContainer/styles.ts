import {css} from "../styled-components";
import {IThemeProps} from "../theme";

export default css`
  display: flex;
  width: 40%;
  flex-direction: column;
  padding: ${(p: IThemeProps) => p.theme.spacing.md} 0;
  gap: ${(p: IThemeProps) => p.theme.spacing.md};
`
