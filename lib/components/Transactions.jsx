import React from 'react';
import { render } from 'react-dom';
import firebase, { reference, signIn, signOut } from '../firebase';
import Frequency from './Frequency';

export default class Transactions extends React.Component {

  render() {
    const { whom, amount, date, recurring, handleThiefChange, handleAmountChange, handleDateChange, handleRecurring } = this.props;
    return (
      <div>
        <div className='input-field'>
          <div className='transaction-field'>
            <h2 className='transaction-title'>What I Owe The Man:</h2>
            <input
              className='whom-input transactions'
              name='whom'
              aria-label='transaction amount input'
              type='text'
              placeholder='The MF Thief'
              value={whom}
              onChange={handleThiefChange}
            />
            <input
              className='amount-input transactions'
              name='amount'
              aria-label='transaction amount input'
              type='number'
              placeholder='Amount'
              value={amount}
              onChange={handleAmountChange}
            />
            <input
              className='date-input transactions'
              aria-label='transaction date input'
              type='date'
              placeholder='Date'
              value={date}
              onChange={handleDateChange}
            />
            <div className='recurring-radio'>
              <p>This Shit On The Regular?!?</p>
              <input
                className='recurring-input'
                aria-label='recurring input radio button'
                type='checkbox'
                placeholder='Recurring?'
                value=''
                onChange={handleRecurring}
              />
            </div>
          </div>
          { recurring ? <Frequency /> : null }
        </div>
      </div>
    );
  }
}
