import React from 'react';
import styled from "styled-components/native";
import {IThemeProps} from "./theme";

const Box = styled.View`
  border: ${(p: IThemeProps) => p.theme.border.sm};
  border-radius: ${(p: IThemeProps) => p.theme.borderRadius.md};
  width: max-content;
  padding: 1em;
`

export default Box;
