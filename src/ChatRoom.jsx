import React, { useState, useRef } from 'react';
import ChatMessage from './ChatMessage';
import { FaDove } from 'react-icons/fa';
import firebase from 'firebase/app';
import 'firebase/firestore';
// import 'firebase/auth';

import { useCollectionData } from 'react-firebase-hooks/firestore';

const ChatRoom = ({ auth }) => {
  const firestore = firebase.firestore();
  const dummy = useRef();

  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limitToLast(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  const sendMessage = async e => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;
    // const { uid, photoURL } = firebase.auth().currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue('');

    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} auth={auth} message={msg} />)}
        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={e => setFormValue(e.target.value)} />
        <button type="submit" disabled={!formValue}>
          <FaDove />
        </button>
      </form>
    </>
  );
};

export default ChatRoom;
