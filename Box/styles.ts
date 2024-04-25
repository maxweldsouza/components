import {IThemeProps} from "../theme";

export default (p: IThemeProps) => `
  border: ${p.theme.border.sm};
  border-radius: ${p.theme.borderRadius.md};
  padding: ${p.theme.spacing.md};
  font-size: ${p.theme.font.size.md};
  font-family: ${p.theme.font.family}; 
`
