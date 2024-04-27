import {css} from "../styled-components";
import {IThemeProps} from "../theme";

// display: block;
// font-size: 1rem;
// transition: background-color 0.2s ease;
// @media (prefers-reduced-motion) {
//     transition: none;
// }
//
// &:hover {
//     background: ${p => p.theme.colors.background};
// }
// &:focus {
//     background-color: white;
//     color: black;
//     outline: none;
// }
export default css`
  border-radius: ${p => p.theme.borderRadius.sm};
  box-shadow: none;
  border: solid 1px #ddd;
  background-color: ${p => p.theme.colors.background2};
  max-width: 100%;
  padding: ${p => p.theme.spacing.xs} ${p => p.theme.spacing.sm};
`
