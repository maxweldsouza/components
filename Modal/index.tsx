import React, {useRef} from "react";
import Dialog from "@/app/shared/Menu/Dialog/index.web";
import NormalContainer from "@/app/shared/NormalContainer/index.web";
import CloseIcon from "@/app/shared/Menu/CloseIcon/index.web";
import Backdrop from "@/app/shared/Backdrop/index.web";
import {useClickAway, useKey} from "react-use";

function Modal({ open, setOpen, children, position='center' }) {
    const ref = useRef(null)
    useClickAway(ref, () => {
        setOpen(false);
    });
    useKey("Escape", () => {
        setOpen(false);
    });
    return (
        <>
            <Dialog $visible={open} $position={position} ref={ref}>
                <NormalContainer>
                    <CloseIcon
                        onClick={(e) => {
                            e.preventDefault();
                            setOpen(false);
                        }}
                    />
                    {children}
                </NormalContainer>
            </Dialog>
            <Backdrop $show={open} />
        </>
    );
}

export default Modal;
