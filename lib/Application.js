import React from 'react';
import { render } from 'react-dom';
import firebase, { reference, signIn, signOut } from './firebase.js';

export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
    }
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }))
  }

  render() {
    const { user } = this.state;
    return (
      <div className='Application'>
        {user ?
          <div>
            <p className='user-greeting'>Logged in as <strong>{user.displayName.split(' ')[0]}</strong><span> ({user.email})</span></p>
            <button className='sign-Out' onClick={() => signOut()}>Sign Out</button>
          </div>
            :<button className='sign-in' onClick={() => signIn()}>Login</button> }
          </div>
    )
  }
}
