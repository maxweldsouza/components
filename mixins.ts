import {IThemeProps} from "./theme";

// TODO use stylesheet manager to filter props
export const fadeInStyles = (p) => `
  visibility: ${p.$show ? 'visible' : 'hidden'};
  opacity: ${p.$show ? '1' : '0'};
  transition:
    opacity 0.2s ease-in-out,
    visibility 0.2s;
`;

export const inlineIcon = (p) => `
  display: inline;
  font-size: inherit;
  color: inherit;
  vertical-align: bottom;
`;

