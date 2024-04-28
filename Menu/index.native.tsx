import React from 'react';
// import {XMarkIcon} from "@heroicons/react/24/outline";
import styled from "styled-components/native";
import NormalContainer from "../NormalContainer";
// import {Icon} from "./Icon";
import {View} from "react-native";
import Dialog from "./Dialog";

// const CloseIcon = styled(XMarkIcon)`
  //position: fixed;
  //top: 0;
  //right: 0;
  //height: 2rem;
  //width: 2rem;
  //padding: 1.5em 2em;
// `

function Menu({ open, setOpen, children }) {
    return (
        <View>
            {/*<Icon onClick={e => {*/}
            {/*    console.log('e ', e);*/}
            {/*    setOpen(true)*/}
            {/*}}/>*/}
            <Dialog $show={open}>
                <NormalContainer>
                    {/*<CloseIcon onClick={() => setOpen(false)}/>*/}
                    {children}
                </NormalContainer>
            </Dialog>
        </View>
    );
}

export default Menu;
