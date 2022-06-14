import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Custom_service from '../bodies/Custom_service';

const Header = () => {
  return (
    <div>
      <Link to="/">HOME</Link>
      <Link to="/guide">가이드</Link>
      <Link to="/custom_choice">커스텀</Link>
      <Link to="/order"></Link>
      <Link to="/contact">채용</Link>
    </div>
  );
};

export default Header;
