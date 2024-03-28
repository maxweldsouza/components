import {css} from "styled-components";

// TODO use stylesheet manager to filter props
export const fadeInStyles = css`
  visibility: ${props => props.$show ? 'visible' : 'hidden'};
  opacity: ${props => props.$show ? '1' : '0'};
  transition: opacity 0.2s ease-in-out, visibility 0.2s;
`

export const inlineIcon = css`
  display: inline;
  font-size: inherit;
  color: inherit;
  vertical-align: bottom;
`
