import React from 'react';
import ContactList from './ContactList.jsx';
import Conversation from './Conversation.jsx';
const Dashboard = () => {
    return (
      <div>
        <h1>Welcome to your protected Conversations!</h1>
        <ContactList />
        <Conversation />
      </div>
    )
}

export default Dashboard;
