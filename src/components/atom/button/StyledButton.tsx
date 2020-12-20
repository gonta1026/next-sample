import React from 'react';
import styled from 'styled-components';
import Size from "../../../const/size"

const StyledButton = () => {
  return (
    <>
      <Button>StyledButtonです</Button>
    </>
  );
}

const Button = styled.button`
  color: red;
  background: black;
  padding: 20px;
  border-radius: ${Size.BORDER_RADIUS}px;
  background: blue;
  }
`;

export default StyledButton;