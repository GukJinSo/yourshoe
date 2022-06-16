import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/">HOME</Link>
      <Link to="/guide">가이드</Link>
      <Link to="/customChoice">커스텀</Link>
      <Link to="/order"></Link>
      <Link to="/contact">채용</Link>
    </div>
  );
};

export default Header;
