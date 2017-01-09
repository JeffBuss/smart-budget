import React from 'react';
import { render } from 'react-dom';
import firebase, { reference, signIn, signOut } from '../firebase';
import Frequency from './Frequency';

export default class Transactions extends React.Component {

  render() {
    const { whom, amount, date, recurring, handleThiefChange, handleAmountChange, handleDateChange, handleRecurring } = this.props
    return (
      <div>
        <div className='input-field'>
          <div className='transaction-field'>
            <h1 className='transaction-title'>Bitches I Gotta Pay:</h1>
            <input
              className='whom-input transactions'
              name='whom'
              type='text'
              placeholder='The MF Thief'
              value={whom}
              onChange={handleThiefChange}
            />
            <input
              className='amount-input transactions'
              name='amount'
              type='number'
              placeholder='Amount'
              value={amount}
              onChange={handleAmountChange}
            />
            <input
              className='date-input transactions'
              name='date'
              type='date'
              placeholder='Date'
              value={date}
              onChange={handleDateChange}
            />
            <div className='recurring-radio'>
              <p>Pay The Bitches More Than Once?</p>
              <input
                className='recurring-input'
                type='checkbox'
                placeholder='Recurring?'
                value=''
                // recurring={recurring}
                onChange={handleRecurring}
              />
            </div>
          </div>
          <Frequency
            recurring={recurring}
          />
        </div>
      </div>
    )
  }
}
