import React from 'react';

import Banner from 'images/header-bg.jpg';
import A from './A';
import Img from './Img';

function Header() {
  return (
    <div>
      <A href="https://www.reactboilerplate.com/">
        <Img src={Banner} alt="react-boilerplate - Logo" />
      </A>
    </div>
  );
}

export default Header;
