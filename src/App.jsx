import React from 'react';
import ChatRoom from './ChatRoom';
import SingIn from './SingIn';
import SignOut from './SignOut';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

firebase.initializeApp({
  apiKey: 'AIzaSyD8HIjJU1DskaIH4GRO51FJ87RPZbUPo2o',
  authDomain: 'chat-app-3d4a7.firebaseapp.com',
  projectId: 'chat-app-3d4a7',
  storageBucket: 'chat-app-3d4a7.appspot.com',
  messagingSenderId: '242642617577',
  appId: '1:242642617577:web:877de50f175f9e86815c78',
  measurementId: 'G-Z4Y73EKXMB',
});


const App = () => {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>⚛️🔥💬</h1>
        <SignOut auth={auth} />
      </header>

      <section>{user ? <ChatRoom auth={auth} /> : <SingIn auth={auth} />}</section>
    </div>
  );
}

export default App;
