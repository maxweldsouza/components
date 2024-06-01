import { ipcRenderer } from 'electron';

// Load in main/preload.ts

export default {
  store: {
    get(key) {
      return ipcRenderer.sendSync('electron-store-get', key);
    },
    set(property, val) {
      ipcRenderer.send('electron-store-set', property, val);
    },
    onKeyChange(keyToWatch, callback) {
      ipcRenderer.send('electron-store-watch-key', keyToWatch);

      const listener = (event, key, newValue, oldValue) => {
        if (key === keyToWatch) {
          callback(key, newValue, oldValue);
        }
      };
      ipcRenderer.on('electron-store-change', listener);
      return () => {
        ipcRenderer.removeListener('electron-store-change', listener);
      };
    },
    // Other method you want to add like has(), reset(), etc.
  },
};
