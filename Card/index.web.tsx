import React from 'react';
import styled from "styled-components";

const Card = styled.div`
  background: var(--background);
  border-radius: var(--border-radius);
  padding: 1.5em;
  box-shadow: var(--card-shadow);
  display: flex;
  flex-direction: column;
  gap: var(gap);
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 0px 4px 80px var(--green-glow);
  }
`

export default Card;
