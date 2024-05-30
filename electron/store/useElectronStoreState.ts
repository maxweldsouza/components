import { useEffect } from 'react';
import { useSetState } from 'react-use';
import { SettingsType } from '../../../main/types';

export default function useElectronStore(
  key: string,
  initialSettings?: SettingsType
) {
  // Retrieve settings from Electron store on mount
  const storedSettings = window.electron.store.get(key) || initialSettings;

  const [settings, setSettings] = useSetState(storedSettings);

  // Persist settings to Electron store whenever they change
  useEffect(() => {
    window.electron.store.set(key, settings);
  }, [key, settings]);

  return [settings, setSettings];
}
