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
      whom: '',
      amount: '',
      date: '',
    };
    this.handleThiefChange = this.handleThiefChange.bind(this)
    this.handleAmountChange = this.handleAmountChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  handleThiefChange(e) {
    let whom = e.target.value
    this.setState({whom: whom})
  }

  handleAmountChange(e) {
    let amount = e.target.value
    this.setState({amount: amount})
  }

  handleDateChange(e) {
    let date = e.target.value
    this.setState({date: date})
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <LogInOut
          user={user}
        />
        <Transactions
          handleThiefChange={this.handleThiefChange}
          handleAmountChange={this.handleAmountChange}
          handleDateChange={this.handleDateChange}
        />
      </div>
    );
  }
}
