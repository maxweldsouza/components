import styled from 'styled-components';
import { inputStyles } from './mixins';

const Input = styled.input`
  ${p => inputStyles(p)}
`;

export default Input;
