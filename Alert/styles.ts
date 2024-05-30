import { css } from 'styled-components';

export default css`
  background-color: ${(p) => p.theme.colors.background3};
  padding: ${(p) => p.theme.spacing.md};
  font-size: ${(p) => p.theme.font.size.md};
  border-radius: ${(p) => p.theme.borderRadius.sm};
`;
