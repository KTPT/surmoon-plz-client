import React, { useState } from 'react';
import styled from 'styled-components';
import { TextareaAutosize } from '@material-ui/core';

interface Props {
  placeholder?: string;
  defaultValue?: string;
  linebreak?: boolean;
}

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

export default function SurveyTextArea({
  placeholder = '',
  defaultValue = '',
  linebreak = true,
}: Props): JSX.Element {
  const [value, setValue] = useState<string>(defaultValue);

  const onKeyPress = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ): void => {
    if (event.key !== 'Enter' || linebreak) {
      return;
    }
    event.preventDefault();
  };

  const onChange = ({
    target,
  }: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const newValue = linebreak
      ? target.value
      : target.value.replace(/(\r\n|\n|\r)/gm, '');
    setValue(newValue);
  };

  return (
    <Container
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
}
