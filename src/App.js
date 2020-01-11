import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import Users from './components/users/Users';
import About from './components/pages/About';
import Alert from './components/layout/Alert';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
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

  //Here, for clearing the user results, the state of users is set back to empty and loading is false
  clearUsers = () => this.setState({ users: [], loading: false });

  //Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 3000);
  };

  //Render lifecycle method is used to pass props down to child components so that states are all maintained at the app level.

  //Below, showClear is set to an equation that returns true or false depending on the array contents.  If there are results, the clear button is shown.  If not, it is hidden.

  //showClear is a prop which is passed up from Search.js and resolved in this.clearUsers
  render() {
    const { users, loading } = this.state;
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
