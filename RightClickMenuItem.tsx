import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  padding: 8px 12px;
  cursor: pointer;
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