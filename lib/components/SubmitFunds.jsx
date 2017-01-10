import React from 'react'
import { render } from 'react-dom';
import firebase from '../firebase';

export default class SubmitFunds extends React.Component {

  render() {
    const { handleFunds, submitFundsDisabled, funds, submitFunds, updateBalance } = this.props;
    return (
      <div className='funds-field'>
        <h1>My Scrilla To Put In The Pot:</h1>
        <input className='input-field funds-input'
          value={funds}
          type='number'
          aria-label='credit input field'
          onChange={handleFunds}
        />
        <button
          className='submit-funds'
          aria-label='submit button for credit input field'
          disabled={submitFundsDisabled}
          onClick={submitFunds}>Submit Funds
        </button>
          <p className='funds'>All My Scratch: ${updateBalance()}</p>
      </div>
    );
  }
}
