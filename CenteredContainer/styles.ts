import {css} from "../styled-components";
import {IThemeProps} from "../theme";

export default css`
  display: flex;
  flex-direction: column;
  width: 480px;
  max-width: 100%;
  margin: 0 auto;
  padding: ${(p: IThemeProps) => p.theme.spacing.md} 0;
  gap: ${(p: IThemeProps) => p.theme.spacing.md};
`
