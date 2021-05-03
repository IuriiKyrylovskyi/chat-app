import React from 'react';
// import 'firebase/firestore';
import 'firebase/auth';

const ChatMessage = ({ auth, message }) => {
  const { text, uid, photoURL } = message;
  // const { uid } = auth.currentUser;

  const messageClass = uid => (auth.currentUser.uid ? 'sent' : 'received');

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt={uid} />
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;