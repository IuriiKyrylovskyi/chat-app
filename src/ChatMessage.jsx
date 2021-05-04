import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const ChatMessage = ({ auth, message }) => {
  const { text, uid, photoURL } = message;
  const user = firebase.auth().currentUser;
  const messageClass = uid === (user.uid ? 'sent' : 'received');

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt={uid} />
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;
