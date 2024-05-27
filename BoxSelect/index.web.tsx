import React from 'react';
import styled from 'styled-components';
import { IThemeProps } from '../theme';

const Select = styled.div`
  display: flex;
  gap: ${(p: IThemeProps) => p.theme.spacing.sm};
`;

export const BoxSelectContext = React.createContext({
  onChange: () => {},
  selectedValue: undefined,
});

function BoxSelect({ children, onChange, value, ...props }) {
  return (
    <Select role="listbox" {...props}>
      <BoxSelectContext.Provider value={{ onChange, selectedValue: value }}>
        {children}
      </BoxSelectContext.Provider>
    </Select>
  );
}

export default BoxSelect;
