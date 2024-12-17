import styled from "styled-components";
import {Bars2Icon} from "../../heroicons";

export const Icon = styled(Bars2Icon)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100px;
  width: 100px;
  padding: 1.5em 2em;
  transition: transform 0.2s ease;
  &:hover {
    transform: scaleX(1.2);
  }
  z-index: ${p => p.theme.zIndex.menuIcon};
`
