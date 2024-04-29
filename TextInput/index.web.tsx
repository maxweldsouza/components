import styled from '../styled-components';
import styles from "./styles";

const Input = styled.input`
  ${styles};
`;
/*
  transition: background-color 0.2s ease;
  @media (prefers-reduced-motion) {
      transition: none;
  }

  &:hover {
        background: ${p => p.theme.colors.background};
  }
  &:focus {
      background-color: white;
      color: black;
      outline: none;
  }
 */

export default Input;
