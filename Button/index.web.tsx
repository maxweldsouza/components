'use client'
import React from 'react';
import styled from 'styled-components'
import buttonStyles from "./buttonStyles";
import buttonTextStyles from "../ButtonText/buttonTextStyles";

const Button = styled.button`
  ${buttonStyles};
  ${buttonTextStyles};
  transition: background-color .2s ease;
  @media (prefers-reduced-motion) {
    transition: none;
  }

`

export default Button;
