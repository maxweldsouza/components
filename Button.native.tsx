'use client'
import {Pressable } from "react-native";
import styled from 'styled-components/native'
import buttonStyles from "./buttonStyles";
import ButtonText from "./ButtonText";

const Custom = styled(Pressable)`
  ${buttonStyles}
`

const Button = ({children,}) => {
    return <Custom>
        <ButtonText>
            {children}
        </ButtonText>
    </Custom>
}

export default Button;
