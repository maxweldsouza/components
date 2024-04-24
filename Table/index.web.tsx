import styled from 'styled-components';
import { IThemeProps } from './theme';

const Table = styled.table`
  table-layout: fixed;
  background-color: ${(p: IThemeProps) => p.theme.colors.background2};
  border-radius: ${(p: IThemeProps) => p.theme.borderRadius.md};
  border-collapse: separate;
  border-spacing: 0;
  border: ${(p: IThemeProps) => p.theme.border};

  th {
    text-align: left;
    padding: ${(p: IThemeProps) => p.theme.spacing.md};
  }

  thead {
    font-size: 0.9em;
    color: ${(p: IThemeProps) => p.theme.colors.text2};
  }
`;

export default Table;
