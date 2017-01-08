import React from 'react';
import { render } from 'react-dom';
import firebase, { reference, signIn, signOut } from '../firebase.js';

export default class Frequency extends React.Component {

  render() {
    return (
      <div>
        <h1>Frequency</h1>
        <input
          type='radio'
          name='frequency radio'
          placeholder='Daily'
          value=''
        />
        <p>Daily</p>
        <input
          type='radio'
          name='frequency radio'
          placeholder='Weekly'
          value=''
        />
        <p>Weekly</p>
        <input
          type='radio'
          name='frequency radio'
          placeholder='Monthly'
          value=''
        />
        <p>Monthly</p>
        <input
          type='radio'
          name='frequency radio'
          placeholder='Annually'
          value=''
        />
        <p>Annually</p>
      </div>
    )
  }
}
