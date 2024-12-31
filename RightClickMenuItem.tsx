import React from "react";
import styled from "styled-components";

const Container = styled.button`
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: transparent;
  opacity: ${(p) => (p.disabled ? "0.2" : "1")};
  border-radius: 0;
  &:first-of-type {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  &:last-of-type {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;
function RightClickMenuItem({ children, onClick, onClose, disabled = false }) {
  // TODO get onClose from ctx?
  return (
    <Container
      onClick={() => {
        onClick();
        onClose();
      }}
      disabled={!onClick || disabled}
    >
      {children}
    </Container>
  );
}

export default RightClickMenuItem;
