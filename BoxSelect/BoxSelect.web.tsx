import React from 'react';
import styled from "styled-components";
import {IThemeProps} from "./theme";

const Select = styled.div`
  display: flex;
  gap: ${(p: IThemeProps)=> p.theme.spacing.sm};
`

export const BoxSelectContext = React.createContext({
    onChange: (e, value) => {}
})

function BoxSelect({ children, onChange, props }) {
    return (
        <Select role='listbox' {...props}>
            <BoxSelectContext.Provider value={{ onChange }}>
                {children}
            </BoxSelectContext.Provider>
        </Select>
    );
}

export default BoxSelect;
