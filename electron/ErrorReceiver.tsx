import React, { useEffect } from 'react';
import { useError } from '../ErrorContext';

function ErrorReceiver() {
  const { addError } = useError();

  useEffect(() => {
    const { ipcRenderer } = window.electron;

    ipcRenderer.on('main-process-error', (_, error) => {
      addError(error);
    });

    // Clean up
    return () => {
      ipcRenderer.removeAllListeners('main-process-error');
    };
  }, [addError]);

  return null;
}

export default ErrorReceiver;
