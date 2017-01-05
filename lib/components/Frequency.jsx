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
          onChange=''
        />
        <input
          type='radio'
          name='frequency radio'
          placeholder='Weekly'
          value=''
          onChange=''
        />
        <input
          type='radio'
          name='frequency radio'
          placeholder='Monthly'
          value=''
          onChange=''
        />
        <input
          type='radio'
          name='frequency radio'
          placeholder='Annually'
          value=''
          onChange=''
        />
      </div>
    )
  }
}
