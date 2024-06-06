import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  padding: 1em;
  border-radius: 5px;
  background: ${(p) => p.theme.colors.error};
  color: white;
`;

function Error({ error }) {
  if (!error.message) return null;
  return <ErrorContainer>{error.message}</ErrorContainer>;
}

export default Error;
