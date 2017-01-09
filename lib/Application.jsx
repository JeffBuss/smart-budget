import React from 'react';
import { render } from 'react-dom';
import firebase from './firebase';
import moment from 'moment';
import { pick, map, extend } from 'lodash';
import { LogInOut } from './components/LogInOut';
import Transactions from './components/Transactions';
import SubmitButton from './components/SubmitButton';
import FlowSchedule from './components/FlowSchedule';
import MonthFinder from './components/MonthFinder';
import SubmitFunds from './components/SubmitFunds';
import Quote from './components/Quotes.jsx'


export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      whom: '',
      amount: '',
      date: '',
      month: '',
      content: [],
      funds: '',
      bankAccount:[],
      recurring: false,
    };

    this.handleThiefChange = this.handleThiefChange.bind(this)
    this.handleAmountChange = this.handleAmountChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleTransactionOnclick = this.handleTransactionOnclick.bind(this)
    // this.handleDelete = this.handleDelete.bind(this)
    this.handleFunds = this.handleFunds.bind(this)
    this.submitFunds = this.submitFunds.bind(this)
    this.handleRecurring = this.handleRecurring.bind(this)
  }

  componentDidMount() {
    firebase.database().ref('content').limitToLast(100)
    .on('value', (snapshot) => {
      const content = snapshot.val() || {};
      this.setState({
        content: map(content, (val, key) => extend(val, { key })),
      });
    });
    firebase.database().ref('funds').limitToLast(100)
    .on('value', (snapshot) => {
      const content = snapshot.val() || {};
      this.setState({
        bankAccount: map(content, (val, key) => extend(val, { key })),
      });
    });
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  handleThiefChange(e) {
    const whom = e.target.value;
    this.setState({ whom });
  }

  handleAmountChange(e) {
    const amount = e.target.value;
    this.setState({ amount });
  }

  handleDateChange(e) {
    const date = e.target.value;
    this.setState({ date }, () => {
      this.getMonth();
    })
  }

  handleFunds(e) {
    this.setState({funds: e.target.value})
  }

  handleRecurring() {
    this.setState({ recurring: !this.state.recurring });
  }

  submitFunds() {
    const { funds } = this.state;
    firebase.database().ref('funds').push({ funds });
    this.setState({ funds: funds}, () => {
      const { funds } = this.state
      this.setState({funds: '', currentFunds: funds}, () => {
        this.updateBalance()
      })
    })
  }

  deleteContent() {

  }

  updateBalance() {
    const newBalance = this.reduceAssets() - this.reduceLiabilities()
    return newBalance
  }


  reduceAssets() {
    let assets = this.state.bankAccount.map(deposits => +deposits.funds)
    let balance = assets.reduce((a, b) => a + b, 0)
    return balance
  }

  reduceLiabilities() {
    let liabilities = this.state.content.map(transaction => +transaction.amount)
    let liabilityBalance = liabilities.reduce((a, b) => a + b, 0)
    return liabilityBalance
  }

  submitFundsDisabled() {
    return !this.state.funds
  }

  submitDisabled() {
    return !this.state.whom || ! this.state.amount || !this.state.date
  }

  getMonth() {
    this.setState({ month: +this.state.date.split('-')[1] })
  }

  handleTransactionOnclick() {
    const { whom, amount, date, month } = this.state;
    firebase.database().ref('content').push({
      whom,
      amount,
      date,
      month,
    });
    this.setState({
      whom: '',
      amount: '',
      date: '',
    });
    this.updateBalance()
    }

  render() {
    const { user, date, amount, whom, content, funds, recurring } = this.state;
    return (
      <div>
        <LogInOut
          user={user}
        />
        <SubmitFunds
          funds={funds}
          handleFunds={this.handleFunds}
          submitFunds={this.submitFunds}
          submitFundsDisabled={this.submitFundsDisabled()}
        />
          <ul>
            <li className='funds'>All My Scratch: ${this.updateBalance()}</li>
          </ul>
        <Transactions
          date={date}
          whom={whom}
          amount={amount}
          recurring={recurring}
          handleThiefChange={this.handleThiefChange}
          handleAmountChange={this.handleAmountChange}
          handleDateChange={this.handleDateChange}
          handleRecurring={this.handleRecurring}
        />
        <SubmitButton
          handleTransactionOnclick={this.handleTransactionOnclick}
          submitDisabled={this.submitDisabled()}
        />
        {/* <FlowSchedule
          content={content}
        /> */}
        <MonthFinder
          content={content}
          updateBalance={this.deleteContent.bind(this)}
          // handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
