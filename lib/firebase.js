import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBpHK3ELdeK0uy4RZ55pmWv4z3tvWoNExw",
  authDomain: "a-smart-budget.firebaseapp.com",
  databaseURL: "https://a-smart-budget.firebaseio.com",
  storageBucket: "a-smart-budget.appspot.com",
  messagingSenderId: "962767124636"
};

export default firebase.initializeApp(config);
export const reference = firebase.database().ref('messages');

const provider = new firebase.auth.GoogleAuthProvider();

export function signIn() {
  return firebase.auth().signInWithPopup(provider);
}

export function signOut() {
  return firebase.auth().signOut();
}
