import React from 'react';
import Contact from './Contact.jsx';
import NewContactModal from './NewContactModal.jsx';
import request from 'superagent';
import firebase from '../../firebase.config.js';

const propTypes = {
  handleContactClick: React.PropTypes.func,
  handleDeleteClick: React.PropTypes.func,
}
export default class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      editOpen: false,
    }
    this.changeModalState = this.changeModalState.bind(this);
    this.addNewContact = this.addNewContact.bind(this);
    this.getContacts = this.getContacts.bind(this);
    this.handleEditContactButtonClick = this.handleEditContactButtonClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);

  };
  componentDidMount() {
    this.getContacts();
  }
  getContacts() {
    const currentUserID = firebase.auth().currentUser.uid;
    const url = `https://react-sms-webapp.firebaseio.com/users/${currentUserID}/contacts.json`;
    request.get(url)
      .end((err, response) => {
        this.setState({
          contacts: response.body,
        })
      })
  }
  changeModalState() {
    this.setState({ editOpen: false })
    let currentModalState = this.state.modalOpen;
    this.setState({ modalOpen: !currentModalState });
  }
  closeModal() {
    this.setState({ modalOpen: false });
  }
  addNewContact({ name, number}) {
    const currentUserID = firebase.auth().currentUser.uid;
    const url = `https://react-sms-webapp.firebaseio.com/users/${currentUserID}/contacts.json`;
    request.post(url)
        .send({name: name, phoneNumber: number})
        .then(() => {
          this.closeModal();
        })
  }
  handleEditContactButtonClick() {
    const localEditOpen = this.state.editOpen;
    this.setState({ editOpen: !localEditOpen})
    this.setState({ modalOpen: false })
  }
  handleDeleteClick(id) {
    const currentUserID = firebase.auth().currentUser.uid;
    const url = `https://react-sms-webapp.firebaseio.com/users/${currentUserID}/contacts/${id}.json`;
    request.del(url)
      .end((err, res) => {
        this.getContacts();
      })
  }
  render() {
    if ( !this.state.contacts ) {
      return (
        <div id="contact-list">
          <button id="new-contact-button" onClick={this.changeModalState}>Add Contact</button>
          <button id="edit-contact-button">Edit Contact</button>
          { this.state.modalOpen ? <NewContactModal addNewContact={this.addNewContact} /> : false}
        </div>
      )
    } else {
      const keys = Object.keys(this.state.contacts)
      const contactElements = keys.map((key) => {
        return (
          <Contact
            key={key}
            id={key}
            name={this.state.contacts[key].name}
            handleContactClick={this.props.handleContactClick}
            handleDeleteClick={this.handleDeleteClick}
            editOpen={this.state.editOpen}
            />
        );
      })
        return (
          <div id="contact-list">
            <button id="new-contact-button" onClick={this.changeModalState}>Add Contact</button>
            <button id="edit-contact-button" onClick={this.handleEditContactButtonClick}>Delete Contact</button>
            { this.state.modalOpen ? <NewContactModal addNewContact={this.addNewContact} /> : false}
            {contactElements}
            {this.getContacts()}
          </div>
        );
    };
  };
}
