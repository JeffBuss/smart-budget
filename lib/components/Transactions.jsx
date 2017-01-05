import React from 'react';
import { render } from 'react-dom';
import firebase, { reference } from '../firebase';
import Frequency from './Frequency';

export default class Transactions extends React.Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
    };
  }

  submitTransaction() {
    const transactionObj = Object.assign({
      merchant: document.getElementById('merchant').value,
      amount: document.getElementById('amount').value,
      date: document.getElementById('date').value,
    });
    this.state.transactions.push(transactionObj);
    firebase.database().ref('transactions').push(transactionObj);
  }

  render() {
    return (
      <div>
        <header>Trapper Keeper</header>
        <h1>Transactions</h1>
        <input
          id='merchant'
          type='text'
          placeholder='The MF Thief'
        />
        <input
          id='amount'
          type='number'
          placeholder='Amount'
        />
        <input
          id='date'
          type='date'
        />
        <input
          type='radio'
          placeholder='Recurring?'
          value=''
          onChange=''
        />
        <button
          onClick={() => {
            this.submitTransaction();
          }}
          >
          Submit
        </button>
        <Frequency
        />
      </div>
    );
  }
}
