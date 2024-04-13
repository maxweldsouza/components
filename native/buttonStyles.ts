export default (p) => `
  border-radius: ${p.theme.borderRadius.md};
  padding: 5px 10px;
  box-shadow: none;
  border: none;
  width: max-content;
  transition: background-color .2s ease;
  background: ${p.theme.colors.buttonBackground};
`

// TODO reduced motion
// @media (prefers-reduced-motion) {
//     transition: none;
// }
