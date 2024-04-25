import {IThemeProps} from "../theme";
export default `
  font-weight: normal;
  font-family: ${(p: IThemeProps) => p.theme.font.family};
  color: ${(p: IThemeProps) => p.theme.colors.text};
  text-transform: uppercase;
`
