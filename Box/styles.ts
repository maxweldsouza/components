import {IThemeProps} from "../theme";

export default (p: IThemeProps) => `
  border: ${p.theme.border.sm};
  border-radius: ${p.theme.borderRadius.md};
  padding: 12px;
`
