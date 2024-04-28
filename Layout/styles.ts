import {css} from "../styled-components";
import {IThemeProps} from "../theme";

export default css`
  display: flex;
  flex-direction: ${(p) => p.direction || 'column'};
  gap: ${(p) => p.theme.spacing[p.spacing]};
  width: 100%;
  align-items: ${(p) => p.align || 'normal'};
`

