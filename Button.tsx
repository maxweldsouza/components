'use client'
import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
  border-radius: 5px;
  font-size: 0.9rem;
  background: var(--blue);
  color: white;
  //padding: .8em 1.6em;
  padding: .6em 1.2em;
  box-shadow: none;
  border: none;
  width: max-content;
  transition: background-color .2s ease;
  @media (prefers-reduced-motion) {
    transition: none;
  }

  &:hover {
    background: var(--light-blue);
  } 
  
`

export default Button;
