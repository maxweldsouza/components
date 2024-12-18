import React, { useRef } from "react";
import { useClickAway } from "react-use";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  width: 200px;
  border-radius: 4px;
  z-index: ${p => p.theme.zIndex.rightClickMenu};
  background: #162126;
`
// TODO switch to styled components
function RightClick({ children, position, onClose, showMenu }) {
  const ref = useRef(null);
  useClickAway(ref, onClose);
  if (!showMenu) return null;
  return (
    <Container
      ref={ref}
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      {children}
    </Container>
  );
}

export default RightClick;
