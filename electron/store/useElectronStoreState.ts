import { useEffect, useState } from 'react';

export default function useElectronStore(key: string) {
  const storedSettings = window.electron.store.get(key);

  const [settings, setSettings] = useState(storedSettings);

  useEffect(() => {
    const unsubscribe = window.electron.store.onKeyChange(
      key,
      (k, newValue, oldValue) => {
        setSettings(newValue);
      }
    );
    return () => {
      unsubscribe();
    };
  }, [key]);

  return [
    settings,
    (newValue) => {
      const merged = {
        ...settings,
        ...newValue,
      };
      window.electron.store.set('settings', merged);
      setSettings(merged);
    },
  ];
}
