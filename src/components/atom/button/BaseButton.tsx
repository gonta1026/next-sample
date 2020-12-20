import React from 'react';
import styled from 'styled-components';

interface styledButtonProps {
  color: string
  border: string
}
interface ButtonProps extends styledButtonProps {
  text: "送信" | "リセット"
}

const BaseButton = ({ color, text, border }: ButtonProps ) => {
  return (
    <>
      <Button color={color} border={border}>{text}</Button>
    </>
  );
}

export default BaseButton;

const Button = styled.button<styledButtonProps>`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: ${({ color }) => (color)};
  background-color: ${({ border }) => (border)};
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  color: white;
  &:hover {
    background-color: ${props =>
      props.color ? 'violet' : 'palevioletred'};
  }
`;
