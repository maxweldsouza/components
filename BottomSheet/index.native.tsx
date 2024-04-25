'use client'
import React, {useState} from 'react';
import {XMarkIcon} from "@heroicons/react/24/outline";
import styled from "styled-components/native";
import NormalContainer from "../NormalContainer";
import Backdrop from "../Backdrop";

const CloseIcon = styled(XMarkIcon)`
  position: fixed;
  top: 0;
  right: 0;
  height: 2rem;
  width: 2rem;
  padding: 1.5em 2em;
`

const Dialog = styled.View`
  border-radius: 10px;
  background-color: var(--background);
  color: var(--text-color);
  position: fixed;
  bottom: 0;
  left: 0;
  width: calc(100% - 4em);
  min-height: 50vh;
  visibility: ${props => props.$show ? 'visible' : 'hidden'};
  transform-origin: 100% 0;
  transform: ${props => props.$show ? 'scale(1) translateY(0) translateX(0)' : 'scale(1) translateY(100%) translateX(0vw)'};
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out, visibility 0.2s;
  box-shadow: var(--bottom-sheet-shadow);
  margin: 2em;
  z-index: var(--z-modal);
`

// TODO drag and drop bottom sheet
function BottomSheet({children, open, onClose}) {
    return (
        <>
            <Backdrop $show={open} onClick={onClose}/>
            <Dialog $show={open}>
                <NormalContainer>
                    <CloseIcon onClick={onClose}/>
                    {children}
                </NormalContainer>
            </Dialog>
        </>
    );
}

export default BottomSheet;
