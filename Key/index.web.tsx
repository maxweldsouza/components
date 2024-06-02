import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: ${(p) => p.theme.font.size.sm};
  border: solid 1px #adadad;
  padding: ${(p) => p.theme.spacing.sm};
  border-radius: 5px;
  color: #adadad;
  background-color: rgba(255, 255, 255, 0.15);
`;

function Key({ children }) {
  return <Container>{children}</Container>;
}

export default Key;
