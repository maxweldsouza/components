import styled from 'styled-components';
import { ReactNode, useContext } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { BoxSelectContext } from '../BoxSelect';
import { IThemeProps } from '../theme';

const Option = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${(p: IThemeProps) => p.theme.font.size.md};
  border-radius: ${(p: IThemeProps) => p.theme.borderRadius.md};
  padding: ${(p: IThemeProps) => p.theme.spacing.sm};
  gap: ${(p: IThemeProps) => p.theme.spacing.sm};
  border: ${(p: IThemeProps) => p.theme.border.sm};
`;

const CheckedIcon = styled(CheckCircleIcon)`
  width: 1em;
`;
const Placeholder = styled.span`
  width: 1em;
`;

interface Props {
  value: any;
  children: ReactNode;
}
function BoxSelectOption({ children, value, ...props }: Props) {
  const context = useContext(BoxSelectContext);
  const checked = context.selectedValue === value;
  console.log('context, value: ', context, value, checked);
  return (
    <Option
      {...props}
      role="option"
      tabIndex="0"
      onClick={(e) => {
        context.onChange(e, value);
      }}
    >
      {checked ? <CheckedIcon /> : null}
      {children}
    </Option>
  );
}

export default BoxSelectOption;
