import styled from "styled-components";
import {useContext} from "react";
import {BoxSelectContext} from "./BoxSelect";

const Option = styled.div`
  border-radius: 5px;
  padding: 1em;
  border: solid 2px #3a3a3a;
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
