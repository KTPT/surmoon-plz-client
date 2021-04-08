import React from 'react';
import CheckBox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { StylesProvider } from '@material-ui/styles';
import styled from 'styled-components';

interface Props {
  value: string;
  color: string;
  disabled?: boolean;
}

const Container = styled(({ color, ...other }: Props & CheckboxProps) => (
  <CheckBox {...other} />
))`
  &.Mui-checked {
    color: ${({ color }: Props) => color};
  }
`;

export default function SurveyCheckBox({
  value,
  color,
  disabled = false,
}: Props) {
  return (
    <StylesProvider injectFirst>
      <Container value={value} color={color} disabled={disabled} />
    </StylesProvider>
  );
}
