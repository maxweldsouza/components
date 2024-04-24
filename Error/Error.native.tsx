import React from 'react';
import styled from "styled-components/native";

const ErrorContainer = styled.div`
  display: flex;
  padding: 1em;
  border-radius: 5px;
  background-color: var(--red);
  color: white;
`

function Error({ error }) {
    if (!error.message) return
    return (
        <ErrorContainer>
            {error.message}
        </ErrorContainer>
    );
}

export default Error;
