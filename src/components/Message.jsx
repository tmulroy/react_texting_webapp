import React from 'react';

const propTypes = {
  messageText: React.PropTypes.string,
}
const Message = ({ messageText }) => {
  return(
    <div className="message">
        {messageText}
    </div>
  )
}

export default Message;
