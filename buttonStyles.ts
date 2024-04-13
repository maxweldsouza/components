import {css} from "styled-components/native";

export default css`
  border-radius: ${p => p.theme.borderRadius.md};
  padding: 5px 10px;
  box-shadow: none;
  border: none;
  width: max-content;
  transition: background-color .2s ease;
  background: ${p => p.theme.colors.white};
`

// TODO reduced motion
// @media (prefers-reduced-motion) {
//     transition: none;
// }
