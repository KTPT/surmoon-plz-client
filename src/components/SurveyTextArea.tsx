import React from 'react';
import styled from 'styled-components';
import { TextareaAutosize } from '@material-ui/core';

const Container = styled(TextareaAutosize)`
  width: 100%;
  border: none;
  border-bottom: solid 2px #e0e0e0;
  outline: none;
  resize: none;
  transition: border-bottom ease-out 0.5s;

  &:focus {
    border-bottom: 2px solid #673ab7;
  }
`;

interface Props {
  defaultValue: string;
}

export default function SurveyTextArea({ defaultValue }: Props): JSX.Element {
  return <Container defaultValue={defaultValue} />;
}
