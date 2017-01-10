import React from 'react';
import { render } from 'react-dom';
import firebase from './firebase';
import moment from 'moment';
import { pick, map, extend } from 'lodash';
import { LogInOut } from './components/LogInOut';
import Transactions from './components/Transactions';
import SubmitButton from './components/SubmitButton';
import MonthFinder from './components/MonthFinder';
import SubmitFunds from './components/SubmitFunds';
import Quote from './components/Quotes.jsx';

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
      bankAccount: [],
      recurring: false,
    };

    this.handleThiefChange = this.handleThiefChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTransactionOnclick = this.handleTransactionOnclick.bind(this);
    this.handleFunds = this.handleFunds.bind(this);
    this.submitFunds = this.submitFunds.bind(this);
    this.handleRecurring = this.handleRecurring.bind(this);
    this.updateBalance = this.updateBalance.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }, () => {
      this.getDataFromFirebase('content', 'content');
      this.getDataFromFirebase('funds', 'bankAccount');
    }));
  }

  getDataFromFirebase(fbArray, state) {
    firebase.database().ref(fbArray).limitToLast(100)
    .on('value', (snapshot) => {
      const array = snapshot.val() || {};
      this.setState({
        [state]: map(array, (val, key) => extend(val, { key })),
      });
    });
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
    });
  }

  handleFunds(e) {
    this.setState({ funds: e.target.value });
  }

  handleRecurring() {
    this.setState({ recurring: !this.state.recurring });
  }

  submitFunds() {
    const { funds } = this.state;
    firebase.database().ref('funds').push({ funds });
    this.setState({ funds }, () => {
      this.setState({ funds: '', currentFunds: funds }, () => {
        this.updateBalance();
      });
    });
  }

  deleteContent(transactionId) {
    this.removeFromContentState(transactionId);
    this.removeFromFB(transactionId);
  }

  removeFromContentState(transactionId) {
    const remainingContent = this.state.content.filter((transaction) => {
      return transaction.key !== transactionId;
    });
    this.setState({ content: remainingContent });
  }

  removeFromFB(transactionId) {
    firebase.database().ref('content').child(transactionId)
    .remove();
  }

  updateBalance() {
    const newBalance = this.reduceAssets() - this.reduceLiabilities();
    return newBalance;
  }

  reduceAssets() {
    const assets = this.state.bankAccount.map(deposits => +deposits.funds);
    const balance = assets.reduce((a, b) => a + b, 0);
    return balance;
  }

  reduceLiabilities() {
    const liabilities = this.state.content.map(transaction => +transaction.amount);
    const liabilityBalance = liabilities.reduce((a, b) => a + b, 0);
    return liabilityBalance;
  }

  submitFundsDisabled() {
    return !this.state.funds;
  }

  submitDisabled() {
    return !this.state.whom || ! this.state.amount || !this.state.date;
  }

  getMonth() {
    this.setState({ month: +this.state.date.split('-')[1] });
  }

  handleTransactionOnclick() {
    this.pushObjToFirebase();
    this.setStateToEmpty();
    this.updateBalance();
  }

  pushObjToFirebase() {
    const { whom, amount, date, month } = this.state;
    firebase.database().ref('content').push({
      whom,
      amount,
      date,
      month,
    });
  }

  setStateToEmpty() {
    this.setState({
      whom: '',
      amount: '',
      date: '',
      month: '',
    });
  }

  render() {
    const { user, date, amount, whom, content, funds, recurring } = this.state;
    return (
      <div>
        <h1 className="title">Trapper Keeper</h1>
        <LogInOut
          user={user}
        />
        <SubmitFunds
          funds={funds}
          handleFunds={this.handleFunds}
          submitFunds={this.submitFunds}
          submitFundsDisabled={this.submitFundsDisabled()}
          updateBalance={this.updateBalance}
        />
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
        <MonthFinder
          content={content}
          deleteContent={this.deleteContent.bind(this)}
        />
      </div>
    );
  }
}
