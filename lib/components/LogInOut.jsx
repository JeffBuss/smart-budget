import React from 'react';
import { signIn, signOut } from '../firebase';

export const LogInOut = ({ user }) => {
  if (user) {
    return (
      <div className='logged-in'>
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
      <div>
        <button
          className='sign-in'
          onClick={() => signIn()}>
          Login
        </button>
      </div>
    );
  }
};
