import { useEffect } from 'react';
import { useSetState } from 'react-use';

export default function useElectronStore(key, initialSettings) {
  const [settings, setSettings] = useSetState(initialSettings);

  // Retrieve settings from Electron store on mount
  useEffect(() => {
    const storedSettings = window.electron.store.get(key);
    if (storedSettings) {
      setSettings(storedSettings);
    }
  }, [key, setSettings]);

  // Persist settings to Electron store whenever they change
  useEffect(() => {
    window.electron.store.set(key, settings);
  }, [key, settings]);

  return [settings, setSettings];
}
