import React from 'react';
import styled from 'styled-components';

import NormalImg from '../Img';
import LogoImg from './logo.svg';

const Img = styled(NormalImg)`
  width: 50px;
  height: 50px;
  display: block;
`;

export default props => <Img src={LogoImg} {...props} />;
