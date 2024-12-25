import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: ${(p) => p.theme.font.size.sm};
  padding: ${(p) => p.theme.spacing.xs} ${(p) => p.theme.spacing.sm};
  border-radius: 5px;
  color: ${(p) => p.theme.colors.text2};
  background-color: rgb(51, 72, 87);
`;

function Key({ children }) {
  return <Container>{children}</Container>;
}

export default Key;
