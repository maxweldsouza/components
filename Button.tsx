'use client'
import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
  border-radius: ${p => p.theme.borderRadius.md};
  font-size: 0.9rem;
  background: ${p => p.theme.colors.blue};
  color: white;
  padding: .6em 1.2em;
  box-shadow: none;
  border: none;
  width: max-content;
  transition: background-color .2s ease;
  @media (prefers-reduced-motion) {
    transition: none;
  }
 
  &:hover {
    background: ${p => p.theme.colors.lightBlue};
  } 
  
`

export default Button;
