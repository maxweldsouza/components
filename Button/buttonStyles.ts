import {IThemeProps} from "../theme";
import {css} from "../styled-components";

export default css`
  border-radius: ${p => p.theme.borderRadius.md};
  padding: ${(p: IThemeProps) => p.theme.spacing.md};
  border: none;
  width: max-content;
  ${(p) => p.secondary ? `
      background: ${p => p.theme.colors.background};
  ` : `
      background: ${p => p.theme.colors.buttonBackground};
  `}
  
`

// TODO reduced motion
// @media (prefers-reduced-motion) {
//     transition: none;
// }
