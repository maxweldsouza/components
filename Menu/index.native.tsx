import React from 'react';
// import {XMarkIcon} from "@heroicons/react/24/outline";
import styled from "styled-components/native";
import NormalContainer from "../NormalContainer";
import {Icon} from "./Icon";
import {View, Text, Pressable} from "react-native";
import Dialog from "./Dialog";
import { XMarkIcon } from '../heroicons'
import {Bars2Icon} from "../heroicons";

const CloseIcon = styled(XMarkIcon)`
    color: black;
`

function Menu({ open, setOpen, children }) {
    return (
        <View>
            <Pressable onPress={e => {
                setOpen(true)
            }}>
                <Icon />
            </Pressable>
            <Dialog visible={open}>
                <NormalContainer>
                    <View>
                        <Pressable onPress={e => {
                            setOpen(false)
                        }}>
                            <CloseIcon/>
                        </Pressable>
                    </View>
                    {children}
                </NormalContainer>
            </Dialog>
        </View>
    );
}

export default Menu;
