import { useEffect, useState } from "react";

export default function useRightClick(ref) {
  const [showMenu, setShowMenu] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleRightClick = (e) => {
      e.preventDefault();
      setPosition({
        x: e.pageX,
        y: e.pageY,
      });
      setShowMenu(true);
    };
    ref.current.addEventListener("contextmenu", handleRightClick);
    return () => {
      ref.current.removeEventListener("contextmenu", handleRightClick);
    };
  }, [ref.current]);
  const onClose = () => setShowMenu(false);
  return [showMenu, position, onClose];
}
