import {css} from "../../styled-components";
import {IThemeProps} from "../../theme";

export default css`
  background-color: ${(p: IThemeProps) => p.theme.colors.background2};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  opacity: ${props => props.visible ? 1 : 0};
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  z-index: ${(p: IThemeProps) => p.theme.zIndex.backdrop};
`
