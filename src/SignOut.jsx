import React from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const SignOut = ({ auth }) => {
  // const auth = firebase.auth();
  return auth.currentUser && <button onClick={() => auth.signOut()}>Sign out</button>;
};

export default SignOut;
