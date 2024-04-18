import { useEffect, useState } from 'react';

function useColorScheme() {
  const [colorScheme, setColorScheme] = useState('light');

  useEffect(() => {
    const handler = (e) => {
      setColorScheme(e.matches ? 'dark' : 'light');
    };

    const matchMediaList = window.matchMedia('(prefers-color-scheme: dark)');

    if (matchMediaList.matches) {
      setColorScheme('dark');
    } else {
      setColorScheme('light');
    }

    matchMediaList.addEventListener('change', handler);

    return () => {
      matchMediaList.removeEventListener('change', handler);
    };
  }, []);

  return colorScheme;
}

export default useColorScheme;
