import React from 'react'
import { render } from 'react-dom';
import firebase from '../firebase';

export default class SubmitFunds extends React.Component {

  render() {
    const { handleFunds, submitFundsDisabled, funds, submitFunds, updateBalance } = this.props;
    return (
      <div className='funds-field'>
        <h2>My Scrilla To Put In The Pot:</h2>
        <input
          className='input-field funds-input'
          value={funds}
          placeholder='How much to throw in the shoebox'
          type='number'
          aria-label='credit input field'
          onChange={handleFunds}
        />
        <button
          className='submit-funds'
          aria-label='submit button for credit input field'
          disabled={submitFundsDisabled}
          onClick={submitFunds}>Add Funds
        </button>
          <p className='funds'>All My Scratch: ${updateBalance().toLocaleString()}</p>
      </div>
    );
  }
}
