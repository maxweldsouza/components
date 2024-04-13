'use client'
import React from 'react';
import styled from 'styled-components'
import buttonStyles from "./native/buttonStyles";

const Button = styled.button`
  ${p => buttonStyles(p)}
  transition: background-color .2s ease;
  @media (prefers-reduced-motion) {
    transition: none;
  }
 
  &:hover {
    background: ${p => p.theme.colors.buttonHover};
  } 
  
`

export default Button;
