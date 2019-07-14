import React from 'react';

import A from '../Header/A';
import Wrapper from './Wrapper';

const index = () => (
  <Wrapper>
    <section>This project is licensed under the MIT license.</section>
    <section>
        Made with love by :
      <A to="/">DS</A>
    </section>
  </Wrapper>
);

export default index;
