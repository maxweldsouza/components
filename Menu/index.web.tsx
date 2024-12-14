"use client";
import React, { useRef } from "react";
import NormalContainer from "../NormalContainer";
import { Icon } from "./Icon";
import Dialog from "./Dialog";
import CloseIcon from "./CloseIcon";
import {useClickAway, useKey, useKeyPressEvent} from "react-use";
import Backdrop from "@/app/shared/Backdrop/index.web";

function Menu({ open, setOpen, children }) {
  const ref = useRef(null);
  const close = () => {
    setOpen(false);
  };
  useClickAway(ref, close);
  return (
    <div>
      <Icon
        onClick={(e) => {
          setOpen(true);
        }}
      />
      <Dialog $visible={!!open} ref={ref}>
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
    </div>
  );
}

export default Menu;
