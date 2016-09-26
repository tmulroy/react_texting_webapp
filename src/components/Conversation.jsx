import React from 'react';
import ReceivedMessageList from './ReceivedMessageList.jsx';
import SentMessageList from './SentMessageList.jsx';
import NewMessage from './NewMessage.jsx';

const propTypes = {
  sentMessages: React.PropTypes.obj,
  handleSendMessageButton: React.PropTypes.func,
}
const Conversation = ({ sentMessages, handleSendMessageButton }) => {
    if ( !sentMessages ) {
      return (
        <div id="conversation">
          <ReceivedMessageList />
          <SentMessageList/>
          <NewMessage
            handleSendMessageButton={handleSendMessageButton}/>
        </div>
      )
    }
    return (
      <div id="conversation">
        <ReceivedMessageList />
        <SentMessageList sentMessages={sentMessages}/>
        <NewMessage
            handleSendMessageButton={handleSendMessageButton}
            />
      </div>
    )
  }

export default Conversation;
