import { useEffect } from 'react';
const ipcRenderer = window.electron.ipcRenderer;

const useIpcRendererEvent = (eventName, handler: (...args: any[]) => void) => {
  useEffect(() => {
    ipcRenderer.on(eventName, handler);

    return () => {
      ipcRenderer.removeListener(eventName, handler);
    };
  }, [eventName, handler]);
};

export default useIpcRendererEvent;
