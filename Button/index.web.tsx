'use client'
import React from 'react';
import styled from 'styled-components'
import buttonStyles from "./buttonStyles";
import {IThemeProps} from "../theme";

const Button = styled.button`
  ${buttonStyles};
  transition: background-color .2s ease;
  color: ${(p: IThemeProps) => p.theme.colors.revText};
  @media (prefers-reduced-motion) {
    transition: none;
  }
 
`

export default Button;
