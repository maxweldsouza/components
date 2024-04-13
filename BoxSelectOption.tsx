import styled from "styled-components";
import {useContext} from "react";
import {BoxSelectContext} from "./BoxSelect";
import {IThemeProps} from "./theme";

const Option = styled.div`
  border-radius: ${(p: IThemeProps)=> p.theme.borderRadius.md};
  padding: ${(p: IThemeProps)=> p.theme.spacing.md};
  border: ${(p: IThemeProps)=> p.theme.border};
`

function BoxSelectOption({children, ...props}) {
    const context = useContext(BoxSelectContext)
    return (
        <Option
            {...props}
            role='option'
            tabIndex='0'
            onClick={e => {
                context.onChange(e, props.value)
            }}
        >{children}</Option>
    );
}


export default BoxSelectOption
