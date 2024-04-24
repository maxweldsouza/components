import styled from 'styled-components';
import { inputStyles } from './mixins';

const StyledTextArea = styled.textarea`
  ${p => inputStyles(p)}
`;

function TextArea({ children, ...props }) {
  return (
    <StyledTextArea type="textarea" {...props}>
      {children}
    </StyledTextArea>
  );
}

export default TextArea;
