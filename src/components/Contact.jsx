import React from 'react';

const propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  handleContactClick: React.PropTypes.func,
  handleDeleteClick: React.PropTypes.func,
  editOpen: React.PropTypes.bool,
}

const Contact = ({ name, handleContactClick, editOpen, handleDeleteClick, id }) => {
  if ( editOpen === false ) {
    return (
      <div id="contact" onClick={() => handleContactClick(id)}>
        {name}
      </div>
    )
  }
  return (
    <div id="contact">
      <div id="edit-contact">
        {name}
      </div>
      <div id="delete-button" onClick={() => handleDeleteClick(id)}>
        X
      </div>
    </div>
  )
}

export default Contact;
Contact.propTypes = propTypes;
