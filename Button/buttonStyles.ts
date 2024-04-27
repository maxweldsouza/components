import {IThemeProps} from "../theme";
import {css} from "../styled-components";
import boxShadow from '../box-shadow'

export default css`
  border-radius: ${p => p.theme.borderRadius.md};
  padding: ${(p: IThemeProps) => p.theme.spacing.md};
  box-shadow: none;
  border: none;
  width: max-content;
  transition: background-color .2s ease;
  background: ${p => p.theme.colors.buttonBackground};
  
`

// TODO reduced motion
// @media (prefers-reduced-motion) {
//     transition: none;
// }
