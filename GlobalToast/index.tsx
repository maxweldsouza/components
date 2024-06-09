import React, { createContext, useCallback, useMemo, useState } from 'react';
import Toast from '../Toast';

export const ToastContext = createContext({
  message: '',
  durationMs: 1000,
  showToast: (msg: any, durationMs?: number) => {},
});

const showDuration = 5000;
const animationDurationMs = 2000;

function GlobalToast({ children }: React.PropsWithChildren) {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const showToast = useCallback((msg, duration = showDuration) => {
    setMessage(msg);
    setTimeout(() => {
      setVisible(true);
    }, 0);

    setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        // setMessage('');
      }, animationDurationMs);
    }, duration - animationDurationMs);
  }, []);

  const value = useMemo(() => {
    return {
      message,
      showToast,
    };
  }, [message, showToast]);
  return (
    <ToastContext.Provider value={value}>
      {message && <Toast $visible={visible}>{message}</Toast>}
      {children}
    </ToastContext.Provider>
  );
}

export default GlobalToast;
