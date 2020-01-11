import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon, search }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <div>{search}</div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'GitFinder',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
