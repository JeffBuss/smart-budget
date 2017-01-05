import React from 'react';
import { render } from 'react-dom';
import firebase, { reference, signIn, signOut } from '../firebase.js';

render() {
  return (
    <div>
      <h1>Frequency</h1>
      <input
        type='radio'
        placeholder='Daily'
        value=''
        onChange=''
      />
      <input
        type='radio'
        placeholder='Weekly'
        value=''
        onChange=''
      />
      <input
        type='radio'
        placeholder='Monthly'
        value=''
        onChange=''
      />
      <input
        type='radio'
        placeholder='Annually'
        value=''
        onChange=''
      />
    </div>
  )
}
