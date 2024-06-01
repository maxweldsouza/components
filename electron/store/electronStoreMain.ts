import { ipcMain } from 'electron';
import Store from 'electron-store';

const store = new Store();

export default function initializeStore(mainWindow) {
  ipcMain.on('electron-store-get', async (event, val) => {
    event.returnValue = store.get(val);
  });

  ipcMain.on('electron-store-set', async (event, key, val) => {
    store.set(key, val);
  });

  ipcMain.on('electron-store-watch-key', async (event, key) => {
    store.onDidChange(key, (...args) => {
      mainWindow?.webContents.send('electron-store-change', key, ...args);
    });
  });
  return store;
}

export function get(key) {
  return store.get(key);
}

export function set(key, val) {
  store.set(key, val);
}

export function initializeStoreData(key, value) {
  const current = store.get(key);
  if (!current) {
    store.set(key, value);
  }
}
