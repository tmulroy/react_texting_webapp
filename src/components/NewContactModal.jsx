import React from 'react';

const propTypes = {
  addNewContact: React.PropTypes.func,
}
export default class NewContactModal extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <form id="new-contact-modal">
        <input name="name" type="text" placeholder="enter name..." />
        <input name="number" type="tel" placeholder="enter phone-number..." />
        <button onClick={() => this.props.addNewContact({ name: "tom", number: 4493 })}>Add</button>
      </form>
    )
  }
}

NewContactModal.propTypes = propTypes;
