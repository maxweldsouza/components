import styled from 'styled-components';
import { IThemeProps } from '../theme';
import {View} from "react-native";

const Container = styled(View)`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${(p: IThemeProps) => p.theme.spacing.lg};
  gap: ${(p: IThemeProps) => p.theme.spacing.lg};
  background-color: ${(p: IThemeProps) => p.theme.colors.background};
  color: ${(p) => p.theme.colors.text};
  height: 100%;
`;

export default Container;
