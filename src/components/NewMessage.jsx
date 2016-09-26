import React from 'react';

const propTypes = {
  handleSendMessageButton: React.PropTypes.func,
}
class NewMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newMessage: '',
    }
    this.handleNewMessageChange = this.handleNewMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.handleSendMessageButton({
      textMessage: this.state.newMessage,
    })
  }

  handleNewMessageChange(e){
    const stateObj = {};
    const stateKey = e.target.name
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }
  render() {
    return (
        <form id="new-message" onSubmit={this.handleSubmit}>
          <input id="new-message-input" name="newMessage" type="text" placeholder="type a new message" onChange={this.handleNewMessageChange}/>
          <input id="new-message-button" type="submit" value="Send"/>
        </form>
    )
  }
}

NewMessage.propTypes = propTypes;
export default NewMessage;
