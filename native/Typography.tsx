import React from 'react';
import {View, Text} from "react-native";
import styled from "styled-components/native";

export const H1Text = styled(Text)`
    font-size: 30px;
`

export const Txt = styled(Text) `
    color: ${p => p.theme.colors.text} 
`

export const H1 = function ({ children }) {
    return <H1Text accessibilityRole="heading" aria-level="1">
        {children}
    </H1Text>
}

