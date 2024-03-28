'use client'
import React, {useState} from 'react';
import {Bars2Icon, XMarkIcon} from "@heroicons/react/24/outline";
import styled from "styled-components";
import NormalContainer from "./NormalContainer";

const Icon = styled(Bars2Icon)`
  position: fixed;
  top: 0;
  right: 0;
  height: 2rem;
  width: 2rem;
  padding: 1.5em 2em;
  transition: transform 0.2s ease;
  &:hover {
    transform: scaleX(1.2);
  }
`

const CloseIcon = styled(XMarkIcon)`
  position: fixed;
  top: 0;
  right: 0;
  height: 2rem;
  width: 2rem;
  padding: 1.5em 2em;
`

const Dialog = styled.div`
  background-color: var(--dark-grey);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  opacity: ${props => props.$show ? 1 : 0};
  visibility: ${props => props.$show ? 'visible' : 'hidden'};
  transform-origin: 100% 0;
  transform: ${props => props.$show ? 'scale(1) translateY(0) translateX(0)' : 'scale(0) translateY(-0vh) translateX(0vw)'};
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out, visibility 0.2s;
`

function Menu({ open, setOpen, children }) {
    return (
        <div>
            <Icon onClick={e => {
                console.log('e ', e);
                setOpen(true)
            }}/>
            <Dialog $show={open}>
                <NormalContainer>
                <CloseIcon onClick={() => setOpen(false)}/>
                {children}
                </NormalContainer>
            </Dialog>
        </div>
    );
}

export default Menu;
