import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import TextInput from '../TextInput';
import Label from '../Label';

const modifiers = [
  'Command',
  'Cmd',
  'Control',
  'Ctrl',
  'CommandOrControl',
  'CmdOrCtrl',
  'Alt',
  'Option',
  'AltGr',
  'Shift',
  'Super',
  'Meta',
];

const numberKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const alphabetKeys = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const functionKeys = [
  'F1',
  'F2',
  'F3',
  'F4',
  'F5',
  'F6',
  'F7',
  'F8',
  'F9',
  'F10',
  'F11',
  'F12',
  'F13',
  'F14',
  'F15',
  'F16',
  'F17',
  'F18',
  'F19',
  'F20',
  'F21',
  'F22',
  'F23',
  'F24',
];

const punctuationKeys = [
  ')',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ':',
  ';',
  ':',
  '+',
  '=',
  '<',
  ',',
  '_',
  '-',
  '>',
  '.',
  '?',
  '/',
  '~',
  '`',
  '{',
  ']',
  '[',
  '|',
  '\\',
  '}',
  '"',
];

const otherKeys = [
  'Plus',
  'Space',
  'Tab',
  'Capslock',
  'Numlock',
  'Scrolllock',
  'Backspace',
  'Delete',
  'Insert',
  'Return',
  'Enter',
  'Up',
  'Down',
  'Left',
  'Right',
  'Home',
  'End',
  'PageUp',
  'PageDown',
  'Escape',
  'Esc',
  'VolumeUp',
  'VolumeDown',
  'VolumeMute',
  'MediaNextTrack',
  'MediaPreviousTrack',
  'MediaStop',
  'MediaPlayPause',
  'PrintScreen',
];

const numPadKeys = [
  'num0',
  'num1',
  'num2',
  'num3',
  'num4',
  'num5',
  'num6',
  'num7',
  'num8',
  'num9',
  'numdec',
  'numadd',
  'numsub',
  'nummult',
  'numdiv',
];

const allKeys = [].concat(
  modifiers,
  numberKeys,
  alphabetKeys,
  functionKeys,
  punctuationKeys,
  otherKeys,
  numPadKeys
);

const allKeysMap = new Map();
allKeys.forEach((key, index) => {
  allKeysMap.set(key, true);
});

function validateElectronAccelerator(shortcut) {
  const keys = shortcut.split('+');
  return keys.every((key) => allKeysMap.has(key));
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  gap: ${(p) => p.theme.spacing.sm};
`;

function KeyboardShortcut({ loading, value, onChange, ...props }) {
  const [shortcut, setShortcut] = useState(value);
  const isValid = validateElectronAccelerator(shortcut);
  return (
    <>
      <Label>Shortcut</Label>
      <Container>
        <TextInput
          value={shortcut}
          placeholder="CommandOrControl+Y"
          onChange={(e) => setShortcut(e.target.value)}
        />
        <Button
          $secondary="true"
          disabled={!isValid}
          onClick={() => {
            onChange(shortcut);
          }}
        >
          Save
        </Button>
      </Container>
    </>
  );
}

export default KeyboardShortcut;
