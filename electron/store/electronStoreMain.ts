import { ipcMain } from 'electron';
import Store from 'electron-store';

const store = new Store();

export default function initializeStore() {
  ipcMain.on('electron-store-get', async (event, val) => {
    event.returnValue = store.get(val);
  });

  ipcMain.on('electron-store-set', async (event, key, val) => {
    store.set(key, val);
  });
  return store;
}

export function get(key) {
  return store.get(key);
}

export function set(key, val) {
  store.set(key, val);
}
