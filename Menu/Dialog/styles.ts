import {css} from "../../styled-components";
import {IThemeProps} from "../../theme";

export default css`
  box-shadow: ${(p: IThemeProps) => p.theme.shadows.lg};
  background-color: ${(p: IThemeProps) => p.theme.colors.background2};
  position: fixed;
  top: ${props => props.position === 'center' ? '50%' : 0};
  right: ${props => props.position === 'center' ? '50%' : 0};
  transform: ${props => props.position === 'center' ? 'translateX(50%) translateY(-50%)' : 'none'};
  max-width: 100%;
  width: 920px;
  height: ${props => props.position === 'center' ? '70%' : '100dvh'};
  opacity: ${props => props.visible ? 1 : 0};
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  z-index: ${(p: IThemeProps) => p.theme.zIndex.modal};
  overflow-y: scroll;
  border-radius: ${(p: IThemeProps) => p.position === 'center' ? p.theme.borderRadius.lg : 0};
`
