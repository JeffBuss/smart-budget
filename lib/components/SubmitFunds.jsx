import React from 'react'
import { render } from 'react-dom';
import firebase, { reference } from '../firebase';

export default class SubmitFunds extends React.Component {

  render() {
    const {handleFunds, submitFundsDisabled, funds, submitFunds } = this.props
    return(
      <div>
        <h1>My Scrilla</h1>
        <input className='input-field transactions'
          value={funds}
          type='number'
          onChange={handleFunds}
        />
        <button
          className='submit-funds'
          disabled={submitFundsDisabled}
          onClick={submitFunds}>Submit Funds
        </button>
      </div>
    )
  }
}
