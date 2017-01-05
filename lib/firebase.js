import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBpHK3ELdeK0uy4RZ55pmWv4z3tvWoNExw",
  authDomain: "a-smart-budget.firebaseapp.com",
  databaseURL: "https://a-smart-budget.firebaseio.com",
  storageBucket: "a-smart-budget.appspot.com",
  messagingSenderId: "962767124636"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const reference = firebase.database().ref('content');

export function signOut() {
  return firebase.auth().signOut();
}
