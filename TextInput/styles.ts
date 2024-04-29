import {css} from "../styled-components";
import {IThemeProps} from "../theme";

// display: block;
// font-size: 1rem;
export default css`
  border-radius: ${p => p.theme.borderRadius.sm};
  box-shadow: none;
  border: solid 1px #ddd;
  background-color: ${p => p.theme.colors.background2};
  max-width: 100%;
  padding: ${p => p.theme.spacing.sm} ${p => p.theme.spacing.sm};
`
