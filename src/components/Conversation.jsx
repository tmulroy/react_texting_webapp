import React from 'react';
import ReceivedMessageList from './ReceivedMessageList.jsx';
import SentMessageList from './SentMessageList.jsx';
import NewMessage from './NewMessage.jsx';
const Conversation = () => {
  return (
    <div id="conversation">
      <ReceivedMessageList />
      <SentMessageList />
      <NewMessage />
    </div>
  )
}

export default Conversation;
