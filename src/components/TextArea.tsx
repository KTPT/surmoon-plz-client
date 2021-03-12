import React, { useState } from 'react';
import styled from '@emotion/styled';

interface Props {
  placeholder?: string;
  fontsize?: string;
  background?: string;
  newline?: boolean;
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
  newline = false,
}: Props): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const fontHeight = parseInt(fontsize.replace(/[^0-9]/g, ''));
  const height = fontHeight * 1.5 + 'px';

  const onInputNewline = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ): void => {
    if (event.key !== 'Enter' || newline) {
      return;
    }

    event.preventDefault();
  };

  const onChange = ({
    target,
  }: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const newValue = newline
      ? target.value
      : target.value.replace(/(\r\n|\n|\r)/gm, '');
    setValue(newValue);

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
      onKeyPress={onInputNewline}
      onChange={onChange}
    />
  );
};

export default TextArea;
