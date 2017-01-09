import React from 'react'
import { render } from 'react-dom';
import firebase, { reference } from '../firebase';

export default class SubmitButton extends React.Component {
  render() {
    const { handleTransactionOnclick, submitDisabled } = this.props
    return(
      <div>
        <button
          disabled={submitDisabled}
          className='submit-button all-buttons'
          onClick={handleTransactionOnclick}>Submit
        </button>
      </div>
    )
  }
}
