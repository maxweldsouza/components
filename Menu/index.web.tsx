'use client'
import React from 'react';
import styled from "styled-components/native";
import NormalContainer from "../NormalContainer";
import {Icon} from "./Icon";
import {View} from "react-native";
import Dialog from "./Dialog";
import { XMarkIcon } from '../heroicons'

const CloseIcon = styled(XMarkIcon)`
  position: fixed;
  top: 0;
  right: 0;
  height: 2rem;
  width: 2rem;
  padding: 1.5em 2em;
  transform-origin: 100% 0;
  transform: ${p => p.visible ? 'scale(1) translateY(0) translateX(0)' : 'scale(0) translateY(0) translateX(0)'};
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out, visibility 0.2s;
`

function Menu({ open, setOpen, children }) {
    return (
        <div>
            <Icon onClick={e => {
                setOpen(true)
            }}/>
            <Dialog visible={open}>
                <NormalContainer>
                <CloseIcon onClick={() => setOpen(false)}/>
                {children}
                </NormalContainer>
            </Dialog>
        </div>
    );
}

export default Menu;
