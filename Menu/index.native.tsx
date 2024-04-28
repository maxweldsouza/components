import React from 'react';
import styled from "styled-components/native";
import NormalContainer from "../NormalContainer";
import {Icon} from "./Icon";
import {View, Text, Pressable} from "react-native";
import Dialog from "./Dialog";
import {Bars2Icon} from "../heroicons";
import CloseIcon from "./CloseIcon";

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
