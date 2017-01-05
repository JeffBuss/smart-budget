import React from 'react';
import { render } from 'react-dom';
import firebase, { reference } from './firebase';
import { LogInOut } from './components/LogInOut';
import Transactions from './components/Transactions';


export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <LogInOut
          user={user}
        />
        <Transactions
        />
      </div>
    );
  }
}
