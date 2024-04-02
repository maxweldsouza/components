'use client'
import styled from 'styled-components'
import buttonStyles from "./buttonStyles";
import ButtonText from './ButtonText'

const Custom = styled.button`
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
