import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      company,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading, repos } = this.props;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back to Search
        </Link>
        Hirable:{' '}
        {hireable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fa-times-circle' />
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              className='round-img'
              alt=''
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            <p>{location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a
              href={html_url}
              rel='noreferrer noopener'
              target='_blank'
              className='btn btn-dark my-1'
            >
              Visit Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <p>{login}</p>
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <p>{company}</p>
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <a href={blog} target='_blank' rel='noreferrer noopener'>
                      {blog}
                    </a>
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-success'>Following: {following}</div>
          <div className='badge badge-light'>Public Repos: {public_repos}</div>
          <div className='badge badge-dark'>Public Gists: {[public_gists]}</div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
}

export default User;
