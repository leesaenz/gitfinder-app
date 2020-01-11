import React, { Fragment } from 'react';
import spinner from './spinner1.gif';

//Reusable spinner component
const Spinner = () => (
  //Using fragment here because just the spinner img is necessary for this component render
  <Fragment>
    <img
      src={spinner}
      alt='Loading...'
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  </Fragment>
);

export default Spinner;
