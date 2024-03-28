import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100dvh;
  top: 0;
  left: 0;
  z-index: 10; // TODO
  background-color: rgba(0, 0, 0, 0.7);
  opacity: ${props => props.$show ? 1 : 0};
  visibility: ${props => props.$show ? 'visible' : 'hidden'};
  transition: opacity 0.2s ease-in-out, visibility 0.2s;
`

export default Backdrop
