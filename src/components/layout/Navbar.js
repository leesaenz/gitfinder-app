import React from 'react';
import PropTypes from 'prop-types';

//Decouping passed props for use in JSX
const Navbar = ({ title, icon, search }) => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <div>{search}</div>
    </nav>
  );
};

//Setting default props in the event no props are passed
Navbar.defaultProps = {
  title: 'GitFinder',
  icon: 'fab fa-github'
};

//Setting propTypes
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
