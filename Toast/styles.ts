import { css } from 'styled-components';

export default css`
  position: fixed;
  bottom: 30px;
  left: 50%;
  color: ${(p) => p.theme.colors.background};
  background-color: ${(p) => p.theme.colors.text};
  font-size: ${(p) => p.theme.font.size.md};
  padding: ${(p) => p.theme.spacing.md};
  border-radius: ${(p) => p.theme.borderRadius.md};
  opacity: ${(p) => (p.$show ? 1 : 0)};
  visibility: ${(props) => (props.$show ? 'visible' : 'hidden')};
  transform-origin: 100% 0;
  transform: ${(props) =>
    props.$show
      ? 'scale(1) translateY(0) translateX(-50%)'
      : 'scale(1) translateY(100%) translateX(-50%)'};
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out,
    visibility 0.2s;
`;
