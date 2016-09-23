import React from 'react';

const propTypes = {
  addNewContact: React.PropTypes.func,
}
export default class NewContactModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      localName: '',
      localNumber: 0,
    }

    this.handleNewContactChange = this.handleNewContactChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleSubmit(e) {
    e.preventDefault();
    this.props.addNewContact({
      name: this.state.localName,
      number: this.state.localNumber,
    })
  }
  handleNewContactChange(e) {
    const stateObj = {};
    const stateKey = e.target.name
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }
  render() {
    return (
      <form id="new-contact-modal" onSubmit={this.handleSubmit}>
        <input name="localName" type="text" onChange={this.handleNewContactChange} placeholder="enter name..." />
        <input name="localNumber" type="tel" onChange={this.handleNewContactChange} placeholder="enter phone-number..." />
        <input type="submit" />
      </form>
    )
  }
}

NewContactModal.propTypes = propTypes;
