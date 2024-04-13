import React from 'react';
import styled from "styled-components/native";
import buttonTextStyles from "./buttonTextStyles";

const ButtonText = styled.Text`
    ${p => buttonTextStyles(p)}
`

export default ButtonText;
