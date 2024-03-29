import styled from "styled-components";
import {useContext} from "react";
import {BoxSelectContext} from "./BoxSelect";

const Option = styled.div`
  border-radius: var(--border-radius);
  padding: var(--padding);
  border: var(--border);
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
