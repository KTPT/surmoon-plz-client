import React from 'react';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import { StylesProvider } from '@material-ui/styles';
import styled from 'styled-components';

interface Props {
  value: string;
  color: string;
  disabled?: boolean;
}

const Container = styled(({ color, ...other }: Props & RadioProps) => (
  <Radio {...other} />
))`
  &.Mui-checked {
    color: ${({ color }: Props) => color};
  }
`;

export default function SurveyRadioButton({
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
