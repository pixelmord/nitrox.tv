import React from 'react';
import { Link } from 'gatsby';

import './Header.scss';

const Header = () => (
  <header className="page-header">
    <Link to="/">
      <img className="logo" src="/assets/logos/logo-645.png" alt="nitrox tv logo" />
    </Link>
  </header>
);
export default Header;
