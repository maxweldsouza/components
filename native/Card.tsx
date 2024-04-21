import React from 'react';
import styled from "styled-components/native";
import {View} from "react-native";

const Card = styled(View)`
  background: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.borderRadius.lg};
  padding: 1.5em;
  box-shadow: var(--card-shadow);
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing.lg};
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 0px 4px 80px var(--green-glow);
  }
`

export default Card;
