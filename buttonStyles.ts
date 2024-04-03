import {css} from "styled-components";

export default css`
  border-radius: ${p => p.theme.borderRadius.md};
  color: ${p => p.theme.colors.white};
  padding: 5px 10px;
  box-shadow: none;
  border: none;
  width: max-content;
  transition: background-color .2s ease;
  background: ${p => p.theme.colors.darkGrey};
`

// TODO reduced motion
// @media (prefers-reduced-motion) {
//     transition: none;
// }
