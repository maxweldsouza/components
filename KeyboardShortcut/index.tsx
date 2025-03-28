import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import TextInput from '../TextInput';
import Label from '../Label';
import BottomSheet from '../BottomSheet';
import Key from '../Key/index.web';
import TextButton from '../TextButton';

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

const numPadNumberKeys = [
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
];

const numPadKeys = ['numdec', 'numadd', 'numsub', 'nummult', 'numdiv'];

const allKeys = [].concat(
  modifiers,
  numberKeys,
  alphabetKeys,
  functionKeys,
  punctuationKeys,
  otherKeys,
  numPadKeys,
  numPadNumberKeys
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

const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const KeyContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${(p) => p.theme.spacing.sm};
  flex-wrap: wrap;
  align-items: baseline;
`;

function KeySection({ keys, title }) {
  return (
    <KeyContainer>
      {keys.map((k) => {
        return <Key key={k}>{k}</Key>;
      })}
    </KeyContainer>
  );
}

function Guide({ open, setOpen }) {
  return (
    <BottomSheet open={open} onClose={() => setOpen(false)}>
      <h1>Key Codes</h1>
      Use any of the keys below separated by a {`'"'`}.
      <KeyContainer>
        <Key>A</Key>to<Key>Z</Key>
        <Key>0</Key>to<Key>9</Key>
        <Key>F1</Key>to<Key>F24</Key>
        <Key>num0</Key>to<Key>num9</Key>
      </KeyContainer>
      <h3>Modifiers</h3>
      <KeySection keys={modifiers} />
      <h3>Numpad</h3>
      <KeySection keys={numPadKeys} />
      <h3>Other keys</h3>
      <KeySection keys={otherKeys} />
      {/* <KeySection title="Punctuation" keys={punctuationKeys} /> */}
    </BottomSheet>
  );
}

function KeyboardShortcut({ loading, value, onChange, ...props }) {
  const [shortcut, setShortcut] = useState(value);
  const [open, setOpen] = useState(false);
  const isValid = validateElectronAccelerator(shortcut);
  return (
    <>
      <LabelContainer>
        <Label>Shortcut</Label>
        <TextButton
          onClick={(e) => {
            setOpen(true);
          }}
        >
          Key codes
        </TextButton>
      </LabelContainer>
      <Guide open={open} setOpen={setOpen} />
      <Container>
        <TextInput
          $error={!isValid && !!shortcut}
          value={shortcut}
          placeholder="Type a shortcut like Shift+Ctrl+X"
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
