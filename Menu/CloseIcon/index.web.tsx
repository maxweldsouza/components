import styled from "../../styled-components";
import {View} from "react-native";
import { XMarkIcon } from '../../heroicons'
import {IThemeProps} from "../../theme";

const CloseIcon = styled(XMarkIcon)`
  top: 0;
  right: 0;
  height: 100px;
  width: 100px;
  padding: 1.5em 2em;
  z-index: ${(p: IThemeProps) => p.theme.zIndex.closeIcon};
  position: absolute;
  transition:  transform 0.2s ease-in-out;
  &:hover {
    transform: scale(125%);
  }
`
/*
  visibility: ${(p) => p.visible ? 'visible' : 'hidden'};
  transform: ${p => p.visible ? 'scale(1) translateY(0) translateX(0)' : 'scale(0) translateY(0) translateX(0)'};
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out, visibility 0.2s;
 */


export default CloseIcon
