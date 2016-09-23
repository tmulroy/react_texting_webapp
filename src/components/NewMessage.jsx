import React from 'react';

export default class NewMessage extends React.Component {
  render() {
    return (
      <div id="new-message">
        <form>
          <input id="new-message-input" name="newMessage" type="text" placeholder="type a new message" />
          <button id="new-message-button">Send</button>
        </form>
      </div>
    )
  }
}
