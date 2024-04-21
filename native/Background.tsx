import React from 'react';
import styled from "styled-components/native";
import {View} from "react-native";

const Background = styled(View)`
  flex: 1;
  background-color: ${p => p.theme.colors.background};
  align-items: center;
  justify-content: center;
  width: 100%;
`

export default Background;
