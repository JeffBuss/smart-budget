import React from 'react';
import { signIn, signOut } from '../firebase';
import Quote from './Quotes';

export const LogInOut = ({ user }) => {
  if (user) {
    return (
      <div className='logged-in login'>
        <p
          className='user-greeting'>
          Logged in as {user.displayName} ({user.email})
        </p>
        <button
          className='sign-out'
          onClick={() => signOut()}>
          Sign Out
        </button>
      </div>
    );
  } else {
    return (
      <div className='logged-out login'>
        <p className='user-greeting'>{ Quote() }</p>
        <button
          className='sign-in'
          onClick={() => signIn()}>
          Login
        </button>
      </div>
    );
  }
};

// module.exports = LogInOut;
