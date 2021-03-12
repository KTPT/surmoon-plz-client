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
  transition: border-bottom ease-out 0.5s;

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
  const fontHeight = parseInt(fontsize.replace(/[^0-9]/g, ''));
  const height = fontHeight * 1.5 + 'px';

  const onChange = ({ target }): void => {
    setValue(target.value.replace(/(\r\n|\n|\r)/gm, ''));
    resizeArea(target);
  };

  const resizeArea = (area: HTMLTextAreaElement): void => {
    area.style.height = height;
    if (area.scrollHeight > fontHeight * 2)
      area.style.height = area.scrollHeight + 'px';
  };

  return (
    <Container
      value={value}
      placeholder={placeholder}
      height={height}
      fontsize={fontsize}
      background={background}
      onChange={onChange}
    />
  );
};

export default TextArea;
