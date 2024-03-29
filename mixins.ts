import { css } from 'styled-components';

// TODO use stylesheet manager to filter props
export const fadeInStyles = css`
  visibility: ${(props) => (props.$show ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.$show ? '1' : '0')};
  transition:
    opacity 0.2s ease-in-out,
    visibility 0.2s;
`;

export const inlineIcon = css`
  display: inline;
  font-size: inherit;
  color: inherit;
  vertical-align: bottom;
`;

export const inputStyles = css`
  display: block;
  font-size: 1rem;
  border-radius: var(--border-radius);
  box-shadow: none;
  border: none;
  background-color: var(--dark-grey);
  max-width: 100%;
  color: white;
  padding: 0.8em;
  transition: background-color 0.2s ease;
  @media (prefers-reduced-motion) {
    transition: none;
  }

  &:hover {
    background: var(--light-grey);
  }
  &:focus {
    background-color: white;
    color: black;
    outline: none;
  }
`;
