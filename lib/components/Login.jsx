import React from 'react';
import firebase, { reference, signIn, signOut } from '../firebase.js';

export const Login = ({ authorize, setUser, text, user }) => {
  if (user) {
    return (
      <div>
        <div
          className='loggedInAs'>
          Logged in as <span className='usersName'> {user.displayName.split(' ').slice(0, -1).join(' ')} </span> <span className='userEmail'>({user.email})</span>
        </div>
        <button
          className='logOutBtn'
          onClick={() => signOut() }
          >Log Out
        </button>
      </div>
    );
  }
  return (
    <div className='logInBar'>
      <button
        className='logInBtn'
        onClick={() => authorize().then((fromFirebase) => setUser(fromFirebase)) }
        >{text}
      </button>
    </div>
  );
};
