import React from 'react';
import { render } from 'react-dom';
import firebase, { reference, signIn, signOut } from '../firebase.js';
import Frequency from './Frequency';

export default class Transactions extends React.Component {

  render() {
    return (
      <div>
        <header>Trapper Keeper</header>
        <h1>Transactions</h1>
        <input
          type='text'
          placeholder='The MF Thief'
          value=''
          onChange=''
        />
        <input
          type='text'
          placeholder='Amount'
          value=''
          onChange=''
        />
        <input
          type='text'
          placeholder='Date'
          value=''
          onChange=''
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
