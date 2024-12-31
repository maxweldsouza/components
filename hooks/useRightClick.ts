import { useEffect, useState } from "react";
import { useKey } from "react-use";

export default function useRightClick() {
  const [showMenu, setShowMenu] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const onContextMenu = (e) => {
    e.preventDefault();
    // e.stopPropagation();
    setPosition({
      x: e.pageX - window.scrollX,
      y: e.pageY - window.scrollY,
    });
    setShowMenu(true);
  };
  const onClose = () => setShowMenu(false);
  useKey("Escape", onClose);
  return { showMenu, position, onContextMenu, onClose };
}
