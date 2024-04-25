import React from 'react';
import {View, Text} from "react-native";
import styled from "../styled-components";

export const H1Text = styled(Text)`
  font-family: sans-serif;
  font-size: 30px;
`

export const H2Text = styled(Text)`
  font-family: sans-serif;
  font-size: 28px;
  font-weight: bold;
  color: red;
`

export const Txt = styled(Text)`
  font-family: sans-serif;
  color: ${p => p.theme.colors.text};
`

export const H1 = function ({children}) {
    return <H1Text accessibilityRole="heading" aria-level="1">
        {children}
    </H1Text>
}

export const H2 = function ({children}) {
    return <H2Text accessibilityRole="heading" aria-level="2" >
        {children}
    </H2Text>
}

