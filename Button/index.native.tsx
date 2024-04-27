import React from 'react';
import styled from '../styled-components'
import buttonStyles from "./buttonStyles";
import ButtonText from "../ButtonText";

const Button = styled.Pressable`
  ${buttonStyles};
`

function NativeButton({ onClick, children, ...props}) {
  return (
      <Button onPress={onClick}>
        <ButtonText>{children}</ButtonText>
      </Button>
  );
}

export default NativeButton;
