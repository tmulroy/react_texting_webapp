import React from 'react';
import ContactList from './ContactList.jsx';
import Conversation from './Conversation.jsx';
import request from 'superagent';
import firebase from '../../firebase.config.js';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      contactID: '',
      sentMessages: {},
    }
    this.handleContactClick = this.handleContactClick.bind(this);
    this.handleSendMessageButton = this.handleSendMessageButton.bind(this);
  }
  handleContactClick(id) {
    this.setState({ contactID: id })
    const currentUserID = firebase.auth().currentUser.uid;
    const url = `https://react-sms-webapp.firebaseio.com/users/${currentUserID}/contacts/${id}/sentMessages.json`;
    request.get(url)
      .end((err,response) => {
        if ( response.body === null ) {
          this.setContactName(0, id);
        } else {
          this.setContactName(1, id);
          this.setState({ sentMessages: response.body })
        }
      })
  }
  setContactName(number, id){
    const currentUserID = firebase.auth().currentUser.uid;
    const urlName = `https://react-sms-webapp.firebaseio.com/users/${currentUserID}/contacts/${id}.json`;
    if ( number === 0) {
      request.get(urlName)
      .end((err,res) => {
        this.setState({ currentContactName: res.body.name })
        alert(`Uhoh, you haven't sent any messages to ${this.state.currentContactName} yet :(`)
      })
    } else {
      request.get(urlName)
      .end((err,res) => {
        this.setState({ currentContactName: res.body.name })
      })
    }
  }
  handleSendMessageButton({ textMessage }) {
    if ( this.state.contactID.length === 0 ) {
      alert('Please select a contact!')
    } else {
      const currentUserID = firebase.auth().currentUser.uid;
      const url = `https://react-sms-webapp.firebaseio.com/users/${currentUserID}/contacts/${this.state.contactID}/sentMessages.json`;
      const urlName = `https://react-sms-webapp.firebaseio.com/users/${currentUserID}/contacts/${this.state.contactID}/name.json`;
      request.post(url)
        .send({ textMessage })
        .then((err, response) => {
          request.get(urlName)
            .end((err,res) => {
              this.setState({ currentContactName: res.body })
              alert(`Successfully sent message to ${res.body}!`)
            });
      });
    };
  }
  render(){
    return (
      <div>
        <h1>Welcome to your protected Conversations!</h1>
        <ContactList
          handleContactClick={this.handleContactClick}
          />
        <Conversation
          sentMessages={this.state.sentMessages}
          handleSendMessageButton={this.handleSendMessageButton}
          />
      </div>
    )
  }
}

export default Dashboard;
