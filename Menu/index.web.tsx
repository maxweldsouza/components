import styled from "styled-components";
import {Bars2Icon} from "@heroicons/react/24/outline";

export const Icon = styled(Bars2Icon)`
  position: fixed;
  top: 0;
  right: 0;
  height: 2rem;
  width: 2rem;
  padding: 1.5em 2em;
  transition: transform 0.2s ease;
  &:hover {
    transform: scaleX(1.2);
  }
`
