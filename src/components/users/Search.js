import React, { useState } from 'react';
import PropTypes from 'prop-types';

//Using a class component here since I want to keep track of state, but will refactor this using React Hooks.
const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  //Initializing state with useState hook
  const [text, setText] = useState('');

  //On change of the search input, the state of text is set to the value of user feedback
  const onChange = e => setText(e.target.value);

  //On form submit, the text is passed to the searchUsers prop, where it triggers the parent as an event.  The text is then cleared.
  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Search cannot be empty.  Try again.', 'danger');
    } else {
      searchUsers(text);
      setText('');
    }
  };
  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search users...'
          value={text}
          onChange={onChange}
        />
        <input type='submit' className='btn btn-dark btn-block' />
      </form>
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
