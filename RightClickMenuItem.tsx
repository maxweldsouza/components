import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  padding: 8px 12px;
  cursor: pointer;
`
function RightClickMenuItem({ children, onClick }) {
    return (
        <Container onClick={onClick}>{children}</Container>
    );
}

export default RightClickMenuItem;