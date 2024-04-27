import styled from "styled-components/native";
import {IThemeProps} from "../theme";

const FormInput = styled.View`
  gap: ${(p: IThemeProps) => p.theme.spacing.sm};
  display: flex;
  flex-direction: column;
`

export default FormInput
