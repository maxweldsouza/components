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

export const inputStyles = (p: IThemeProps) => `
  display: block;
  font-size: 1rem;
  border-radius: ${p.theme.borderRadius.md};
  box-shadow: none;
  border: none;
  background-color: ${p.theme.colors.background};
  max-width: 100%;
  color: white;
  padding: 0.8em;
  transition: background-color 0.2s ease;
  @media (prefers-reduced-motion) {
    transition: none;
  }

  &:hover {
    background: ${p.theme.colors.background};
  }
  &:focus {
    background-color: white;
    color: black;
    outline: none;
  }
`;
