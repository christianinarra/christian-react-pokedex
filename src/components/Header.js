import React from 'react';
import {Link} from 'react-router-dom';
import Logo from './Logo';

const Header = () => (
  <nav
    className="header level has-text-centered"
    style={{
      backgroundColor: '#CE403A',
      padding: '10px 20px',
      justifyContent: 'center'
    }}
  >
    <Link to="/" className="level-left">
      <Logo size={40} />      
    </Link>
  </nav>
);

export default Header;
