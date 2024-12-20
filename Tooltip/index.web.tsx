import React, { useRef } from "react";
import styled from "styled-components";
import useHover from "@/app/shared/hooks/useHover";

const Container = styled.div`
  position: relative;
`;

const TooltipContainer = styled.div`
  position: absolute;
  top: 0;
  right: 50%;
  color: white;
  transform: translateX(50%) translateY(-120%);
  padding: 12px;
  border-radius: 8px;
  background: #1e293b;
  white-space: nowrap;

  &:after {
    top: 100%;
    left: 50%;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    border-color: transparent;
    border-top-color: #1e293b;
    border-width: 10px;
    margin-left: -10px;
  }
`;
function Tooltip({ children, tooltip }) {
  const ref = useRef(null);
  const hover = useHover(ref);
  return (
    <Container ref={ref}>
      {hover && <TooltipContainer>{tooltip}</TooltipContainer>}
      {children}
    </Container>
  );
}

export default Tooltip;
