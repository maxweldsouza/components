import React from 'react';
import styled from "styled-components";

const Card = styled.div`
  background: black;
  border-radius: 1em;
  padding: 1.5em;
  box-shadow: 0px 4px 40px var(--green-glow);
  display: flex;
  flex-direction: column;
  gap: .5rem;
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 0px 4px 80px var(--green-glow);
  }
`

export default Card;
