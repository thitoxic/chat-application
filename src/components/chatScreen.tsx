import React from 'react';
import ChatHeader from './chatHeader.tsx';
import Messages from './messageStore.tsx';
import SendBox from './sendBox.tsx';
import "./common.css";

function ChatScreen() {
  return (
    <>
      <div className='flex flex-col w-full justify-end h-screen'>
        <div>
          <ChatHeader />
          <Messages />
          <SendBox />
        </div>
      </div>
    </>
  );
}

export default ChatScreen;
