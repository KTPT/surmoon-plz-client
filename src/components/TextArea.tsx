import React from 'react';
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
  border-bottom: solid 2px #e5e5e5;
  background: ${(props) => props.background};
  font-size: ${(props) => props.fontsize};
  resize: none;

  &:focus {
    outline: none;
    border-bottom: 2px solid #673ab7;
  }
`;

const TextArea = ({
  placeholder,
  fontsize = '13px',
  background,
}: Props): JSX.Element => {
  const height = parseInt(fontsize.replace(/[^0-9]/g, '')) * 1.5;

  return (
    <Container
      placeholder={placeholder}
      height={height + 'px'}
      fontsize={fontsize}
      background={background}
    />
  );
};

export default TextArea;
