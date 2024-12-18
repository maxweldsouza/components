import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  padding: 8px 12px;
  cursor: pointer;
`
function RightClickMenuItem({ children }) {
    return (
        <Container>{children}</Container>
    );
}

export default RightClickMenuItem;