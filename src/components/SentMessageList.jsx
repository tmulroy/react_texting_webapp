import React from 'react';
import Message from './Message.jsx';

const propTypes = {
    sentMessages: React.PropTypes.obj,
}
const SentMessageList = ({sentMessages}) => {
    const keys = Object.keys(sentMessages);
    const messageElements = keys.map((key) => {
        return (<Message key={key} messageText={sentMessages[key].textMessage} />)
    })
    return (
        <div id="sent-message-list">
            {messageElements}
        </div>
    )
}

export default SentMessageList;
