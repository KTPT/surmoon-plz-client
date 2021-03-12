import React, { useState } from 'react';
import styled from '@emotion/styled';

interface Props {
  placeholder?: string;
  fontsize?: string;
  background?: string;
}

interface StyleProps {
  placeholder?: string;
  height: string;
  fontsize: string;
  background?: string;
}

const Container = styled.textarea<StyleProps>`
  width: 100%;
  height: ${(props) => props.height};
  border: none;
  border-bottom: solid 2px #e0e0e0;
  background: ${(props) => props.background};
  font-size: ${(props) => props.fontsize};
  outline: none;
  resize: none;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-x: hidden;
  overflow-y: visible;

  &:focus {
    border-bottom: 2px solid #673ab7;
  }
`;

const TextArea = ({
  placeholder,
  fontsize = '13px',
  background,
}: Props): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const height = parseInt(fontsize.replace(/[^0-9]/g, '')) * 1.5;

  const onChange = ({ target }) => {
    setValue(target.value.replace(/(\r\n|\n|\r)/gm, ''));
  };

  return (
    <Container
      value={value}
      placeholder={placeholder}
      height={height + 'px'}
      fontsize={fontsize}
      background={background}
      onChange={onChange}
    />
  );
};

export default TextArea;
