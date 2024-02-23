import React, { useContext, useEffect, useState } from 'react'
import Messages from './messages.tsx'
import { collection, query, onSnapshot, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from '../firebase.js';

const MessageStore = () => {

  const [messages, setMassages] = useState([]);

  

  useEffect(() => {

    const q = query(
      collection(db, "Messages"),
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc : any) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      console.log('messages', messages)
      setMassages(messages);
    });

    return () => unsubscribe;
  }, []);

  return (
    <><Messages messages={messages} /></>
  )
}

export default MessageStore