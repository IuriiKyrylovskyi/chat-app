import React from 'react';
import ChatMessage from './ChatMessage';
// import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useCollectionData } from 'react-firebase-hooks/firestore';

const ChatRoom = () => {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  return (
    <>
      <div>{messages && messages.map(msg => <ChatMessage />)}</div>
      <div></div>
      <div></div>
    </>
  );
};

export default ChatRoom;
