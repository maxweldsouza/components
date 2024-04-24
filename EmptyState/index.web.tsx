import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  padding: 4em 0 1em 0;
  color: #999;
`;

function EmptyState({ children }) {
  return <Container>{children}</Container>;
}
export default EmptyState;
