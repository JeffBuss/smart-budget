import React from 'react';
import { render } from 'react-dom';
import firebase, { reference, signIn, signOut } from './firebase.js';
import { Login } from './components/Login';

export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  render() {
    return (
      <div>
        <Login
          authorize={ signIn }
          setUser= { (userFromFireBase) => {
            this.setState({ user: userFromFireBase.user });
          }}
          text="login"
          user={this.state.user}
        />
      </div>
    )
  }
}
