import styled from 'styled-components';
import { inputStyles } from './mixins';

const StyledTextArea = styled.textarea`
  ${inputStyles}
`;

function TextArea({ children, ...props }) {
  return (
    <StyledTextArea type="textarea" {...props}>
      {children}
    </StyledTextArea>
  );
}

export default TextArea;
