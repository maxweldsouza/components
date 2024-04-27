import {css} from "styled-components";
import boxShadow from '../box-shadow'

export default css`
  ${boxShadow};
  background: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.borderRadius.lg};
  padding: ${p => p.theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing.md};
  transition: box-shadow 0.2s ease;
  width: 100%;
`
