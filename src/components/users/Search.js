import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Using a class component here since I want to keep track of state, but will refactor this using React Hooks.
export class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired
  };

  //On change of the search input, the state of text is set to the value of user feedback
  onChange = e => this.setState({ text: e.target.value });

  //On form submit, the text is passed to the searchUsers prop, where it triggers the parent as an event.  The text is then cleared.
  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type='submit' className='btn btn-dark btn-block' />
        </form>
      </div>
    );
  }
}

export default Search;
