import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import Users from './components/users/Users';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  //Search Function
  // This uses text that is passed to a prop (searchUsers) from within the onSubmit function in Search.js.  It then uses the text from that prop below to asynchronously make the API request with ENV variables and sets the state of users with the response data.
  searchUsers = async text => {
    this.setState({ loading: true });

    //Waiting for axios to respond and then updating the app with the response when ready
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  //Render lifecycle method is used to pass props down to child components so that states are all maintained at the app level.
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
