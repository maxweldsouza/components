import React from 'react';
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
  &:first-of-type {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  &:last-of-type {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`
function RightClickMenuItem({ children, onClick, onClose }) {
    // TODO get onClose from ctx?
    return (
        <Container onClick={() => {
            onClick()
            onClose()
        }}>{children}</Container>
    );
}

export default RightClickMenuItem;