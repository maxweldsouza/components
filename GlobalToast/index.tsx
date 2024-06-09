import React, { createContext, useCallback, useMemo, useState } from 'react';
import Toast from '../Toast';
import useMountAnimation from '../hooks/useMountAnimation';

export const ToastContext = createContext({
  message: '',
  durationMs: 1000,
  showToast: (msg: any, durationMs?: number) => {},
});

function GlobalToast({ children }: React.PropsWithChildren) {
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);

  const { visible, mounted } = useMountAnimation(show);

  const showToast = useCallback((msg, duration = 5000) => {
    setMessage(msg);
    setShow(true);
    setTimeout(() => setShow(false), duration);
  }, []);

  const value = useMemo(() => {
    return {
      message,
      showToast,
    };
  }, [message, showToast]);
  return (
    <ToastContext.Provider value={value}>
      {mounted && <Toast $visible={visible}>{message}</Toast>}
      {children}
    </ToastContext.Provider>
  );
}

export default GlobalToast;
