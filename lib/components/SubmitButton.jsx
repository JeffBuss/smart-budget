import React from 'react'
import { render } from 'react-dom';
import firebase, { reference } from '../firebase';

export default class SubmitButton extends React.Component {
  render() {
    const { handleTransactionOnclick } = this.props
    return(
      <div>
        <button
          className='SubmitBtn'
          onClick={handleTransactionOnclick}>Submit
        </button>
      </div>
    )
  }
}
