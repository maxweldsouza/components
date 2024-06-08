import { css } from 'styled-components';

export default css`
  color: ${(p) => p.theme.colors.text};
  font-size: ${(p) => p.theme.font.size.sm};
  border-radius: ${(p) => p.theme.borderRadius.sm};
  // background-color: ${(p) => p.theme.colors.background};
  border: solid 1px #333;
`;
