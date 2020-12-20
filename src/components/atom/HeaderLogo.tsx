import React, {FC} from 'react';
import styled from 'styled-components';


const Logo = styled.div`
  width: 50px;
  background: red;
`

const HeaderLogo: FC = () => (
  <Logo>ロゴです</Logo>
);

export default HeaderLogo;