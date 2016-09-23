import React from 'react';
import Contact from './Contact.jsx';
import NewContactModal from './NewContactModal.jsx';
import request from 'superagent';

export default class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    }
    this.openModal = this.openModal.bind(this);
    this.addNewContact = this.addNewContact.bind(this);
  }

  openModal() {
    this.setState({ modalOpen: true });
  }
  closeModal() {
    this.setState({ modalOpen: false });
  }
  addNewContact({ name, number }) {
    //needs to get key of current user to pass into url!!
    const url = 'https://react-sms-webapp.firebaseio.com/users/6CJ4cAdy4WebpoTIZ5n6rWqr50u2/contacts.json';
    request.post(url)
        .send({name: name, phoneNumber: number})
        .then(() => {
          this.closeModal();
        })
  }
  render() {
    return (
      <div id="contact-list">
        <button id="new-contact" onClick={this.openModal}>Add Contact</button>
        <button id="edit-contact">Edit Contact</button>
        { this.state.modalOpen ? <NewContactModal addNewContact={this.addNewContact} /> : false}
        <Contact />
      </div>
    );
  };
}
