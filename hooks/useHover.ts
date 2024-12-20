import { useEffect, useState } from "react";

export default function useHover(ref) {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const onEnter = () => {
      setHover(true);
    };
    const onLeave = () => {
      setHover(false);
    };
    ref.current?.addEventListener?.("mouseenter", onEnter);
    ref.current?.addEventListener?.("mouseleave", onLeave);
    return () => {
      ref.current?.removeEventListener?.("mouseenter", onEnter);
      ref.current?.removeEventListener?.("mouseleave", onLeave);
    };
  }, []);

  return hover;
}
