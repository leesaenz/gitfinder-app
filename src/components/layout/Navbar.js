import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//Decoupling passed props for use in JSX
const Navbar = ({ title, icon, search }) => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
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
