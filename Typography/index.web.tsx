import React from 'react';
import {View, Text} from "react-native";
import styled from "../styled-components";
import Base from './Base'
import {IThemeProps} from "../theme";

export const H1 = styled(Base)`
  font-size: ${(p: IThemeProps) => p.theme.font.size.xl};
`

export const H2 = styled(Base)`
  font-size: ${(p: IThemeProps) => p.theme.font.size.lg};
`

export const Txt = styled(Base)`
  font-size: ${(p: IThemeProps) => p.theme.font.size.md};
  color: ${p => p.theme.colors.text};
`

