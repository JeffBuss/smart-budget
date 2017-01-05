import React from 'react';
import { render } from 'react-dom';
import firebase, { reference, signIn, signOut } from '../firebase';
import Frequency from './Frequency';

export default class Transactions extends React.Component {

  render() {
    const { whom, amount, date, handleThiefChange, handleAmountChange, handleDateChange } = this.props
    return (
      <div>
        <header>Trapper Keeper</header>
        <h1>Transactions</h1>
        <input
          type='text'
          placeholder='The MF Thief'
          value={whom}
          onChange={handleThiefChange}
        />
        <input
          type='text'
          placeholder='Amount'
          value={amount}
          onChange={handleAmountChange}
        />
        <input
          type='text'
          placeholder='Date'
          value={date}
          onChange={handleDateChange}
        />
        <input
          type='radio'
          placeholder='Recurring?'
          value=''
          onChange=''
        />
        <Frequency
        />
      </div>
    )
  }
}
