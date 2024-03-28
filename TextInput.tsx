import React from 'react';
import styled from "styled-components";

const Input = styled.input`
  display: block;
  font-size: 1.0rem;
  border-radius: 3px;
  box-shadow: none;
  border: none;
  background: var(--dark-grey);
  max-width: 100%;
  color: white;
  padding: .8em;
  transition: background-color 0.2s ease;
  @media (prefers-reduced-motion) {
    transition: none;
  }

  &:hover {
    background: var(--light-grey);
  }
  &:focus
  {
    background-color: white;
    color: black;
    outline: none;
  }
`

export default Input;
