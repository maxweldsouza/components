import { useEffect, useState } from 'react';

const animationDurationMs = 2000;

function useMountAnimation(show) {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (show) {
      setMounted(true);
      setTimeout(() => {
        setVisible(true);
      }, 0);
    } else {
      setVisible(false);
      setTimeout(() => {
        setMounted(false);
      }, animationDurationMs);
    }
  }, [show]);

  return {
    visible,
    mounted,
  };
}

export default useMountAnimation;
