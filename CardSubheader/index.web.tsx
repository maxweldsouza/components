import React from 'react';
import styled from "styled-components";
import {Text} from 'react-native'
import {IThemeProps} from "../theme";

const CardHeader = styled(Text)`
  font-size: .9rem;
  font-weight: normal;
  font-family: ${(p: IThemeProps) => p.theme.font.family};
  color: var(--text-color-light);
  text-transform: uppercase;
`

export default CardHeader;
