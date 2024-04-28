import styled from "../../styled-components";
import styles from "./styles";

const CustomModal = styled.Modal`
  ${styles}
`

import React from 'react';

function Dialog({ visible, open, setOpen, children, onRequestClose }) {
  if (open || setOpen) {
    throw new Error('Deprecated. Use visible, onRequestClose')
  }
  return (
      <CustomModal
          animationType={'fade'}
          transparent={true}
          visible={visible}
      >
        {children}
      </CustomModal>
  );
}


export default Dialog
