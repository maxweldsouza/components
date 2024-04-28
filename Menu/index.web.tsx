'use client'
import React from 'react';
import NormalContainer from "../NormalContainer";
import {Icon} from "./Icon";
import Dialog from "./Dialog";
import CloseIcon from "./CloseIcon";

function Menu({ open, setOpen, children }) {
    return (
        <div>
            <Icon onClick={e => {
                setOpen(true)
            }}/>
            <Dialog visible={open}>
                <NormalContainer>
                <CloseIcon onClick={(e) => {
                    console.log('e: ', e);
                    e.preventDefault()
                    setOpen(false)
                }}/>
                {children}
                </NormalContainer>
            </Dialog>
        </div>
    );
}

export default Menu;
