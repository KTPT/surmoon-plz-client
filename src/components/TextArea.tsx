import React from 'react';
import styled from '@emotion/styled';

interface Props {
  placeholder?: string;
  fontsize?: string;
  background?: string;
}

const Container = styled.textarea<Props>`
  width: 100%;
  height: ${(props) => props.fontsize};
  padding-bottom: 0.5em;
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
  return (
    <Container
      placeholder={placeholder}
      fontsize={fontsize}
      background={background}
    />
  );
};

export default TextArea;
