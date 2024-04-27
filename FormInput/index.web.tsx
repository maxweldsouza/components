import styled from "styled-components";
import {IThemeProps} from "../theme";

const FormInput = styled.div`
  gap: ${(p: IThemeProps) => p.theme.spacing.sm};
  display: flex;
  flex-direction: column;
`

export default FormInput
