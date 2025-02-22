import { css } from 'styled-components';
import { IThemeProps } from '../theme';

export default css`
  position: fixed;
  width: 100%;
  height: 100dvh;
  top: 0;
  left: 0;
  z-index: ${(p: IThemeProps) => p.theme.zIndex.backdrop};
  background-color: rgba(0, 0, 0, 0);
  opacity: ${(props) => (props.$show ? 1 : 0)};
  visibility: ${(props) => (props.$show ? 'visible' : 'hidden')};
  transition: opacity 0.2s ease-in-out, visibility 0.2s;
  backdrop-filter: blur(20px);
`;
