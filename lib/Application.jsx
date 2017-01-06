import React from 'react';
import { render } from 'react-dom';
import firebase, { reference } from './firebase';
import moment from 'moment';
import { pick, map, extend } from 'lodash';
import { LogInOut } from './components/LogInOut';
import Transactions from './components/Transactions';
import SubmitButton from './components/SubmitButton';
import FlowSchedule from './components/FlowSchedule';


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

  getMonth() {
    this.setState({ month: +moment(this.state.date).format('MM') })
  }

  handleTransactionOnclick() {
    const { whom, amount, date } = this.state;
    reference.push({
      whom,
      amount,
      date,
    });
    this.setState({
      whom: '',
      amount: '',
      date: '',
    });
    debugger;
  }



  render() {
    const { user, date, amount, whom, content } = this.state;
    return (
      <div>
        <LogInOut
          user={user}
        />
        <Transactions
          date={date}
          whom={whom}
          amount={amount}
          handleThiefChange={this.handleThiefChange}
          handleAmountChange={this.handleAmountChange}
          handleDateChange={this.handleDateChange}
        />
        <SubmitButton
          handleTransactionOnclick={this.handleTransactionOnclick}
        />
      <FlowSchedule
        content={content}
        />
      </div>
    );
  }
}
