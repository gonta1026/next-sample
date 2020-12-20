import React, {FC} from 'react';
import styled from 'styled-components';
import {customMedia} from "../../media/customMedia"
import HeaderLogo from "../atom/HeaderLogo"
import H1Title from "../atom/H1Title"
import {StyledButton, BaseButton} from "../atom/button"

const HeaderWrap = styled.div`
  justify-content: space-between;
  ${customMedia.lessThan("md")`
    font-size: 30px;
  `}
  ${customMedia.between("md", "lg")`
    background: red;
  `}
`;

const Header: FC = () => (
  <HeaderWrap css={`margin: 10px`}>
    <H1Title/>
    <HeaderLogo />
    <BaseButton color={"red"} text="送信" border="red"/>
    <BaseButton color={"blue"} text="リセット" border="red" />
    <StyledButton/>
  </HeaderWrap>
);

export default Header;