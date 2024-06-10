import { useMediaDevices } from 'react-use';

export default function useAudioInputMediaDevices() {
  const { devices } = useMediaDevices();
  return {
    devices: devices?.filter((x) => x.kind === 'audioinput'),
  };
}
