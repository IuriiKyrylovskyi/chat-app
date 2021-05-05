import React from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

const SingIn = ({ auth }) => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return <button onClick={signInWithGoogle}>Sing in with Google</button>;
};

export default SingIn;