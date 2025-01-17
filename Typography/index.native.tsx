import React from 'react';
import {View, Text} from "react-native";
import styled from "../styled-components";
import {IThemeProps} from "../theme";

export const H1Text = styled(Text)`
  font-size: ${(p: IThemeProps) => p.theme.font.size.xl};
  font-weight: bold;
`

export const H2Text = styled(Text)`
  font-size: ${(p: IThemeProps) => p.theme.font.size.lg};
`

export const Txt = styled(Text)`
  color: ${p => p.theme.colors.text};
`

export const H1 = function ({children}) {
    return <H1Text accessibilityRole="header" aria-level="1">
        {children}
    </H1Text>
}

export const H2 = function ({children}) {
    return <H2Text accessibilityRole="header" aria-level="2" >
        {children}
    </H2Text>
}

