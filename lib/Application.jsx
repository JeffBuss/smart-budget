import React from 'react';
import { render } from 'react-dom';
import firebase, { reference } from './firebase';
import { pick, map, extend } from 'lodash';
import { LogInOut } from './components/LogInOut';
import Transactions from './components/Transactions';
import SubmitButton from './components/SubmitButton';
import AddEvent from './components/AddEvent';


export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      whom: '',
      amount: '',
      date: '',
      content: [],
    };

    this.handleThiefChange = this.handleThiefChange.bind(this)
    this.handleAmountChange = this.handleAmountChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleTransactionOnclick = this.handleTransactionOnclick.bind(this)
  }
  componentDidMount() {
    reference.limitToLast(100).on('value', (snapshot) => {
    const content = snapshot.val() || {}
    this.setState({
      content: map(content, (val, key) => extend(val, { key }))
      })
    })
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

  handleTransactionOnclick() {
    const { whom, amount, date } = this.state
    reference.push({
      whom: whom,
      amount: amount,
      date: date
    })
    this.setState({
      whom: '',
      amount: '',
      date: '',
    })
    debugger
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
        <SubmitButton
          handleTransactionOnclick={this.handleTransactionOnclick}
        />
        {/* <AddEvent content={}
        /> */}
        {/* <ul className='renderedContent'>
          <li className='renderWhom'>{this.renderWhom()}</li>
          <li className='renderAmount'>{this.renderAmount()}</li>
          <li className='renderDate'>{this.renderDate()}</li>
          </ul> */}
      </div>
    );
  }
}
