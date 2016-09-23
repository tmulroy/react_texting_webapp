import React, { Component } from 'react';
import firebase from '../../firebase.config.js';
import { withRouter } from 'react-router';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      phoneNumber: 0,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }

  handleSubmit() {
    const { email, password, phoneNumber } = this.state;
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
      })
      .then((user) => {
        firebase.database().ref('users')
          .child(user.uid)
          .set({phoneNumber: phoneNumber, email: email})
      })
      .then(() => {
        this.props.router.push('/dashboard');
      })
  }
  render() {
    return (
      <div>
      <h1>Welcome! Please Register:</h1>
       <div id="register-form">
         <div>
           <input name="email" onChange={this.handleChange} type="text" placeholder="email" />
         </div>
         <div>
           <input name="password" onChange={this.handleChange} type="password" placeholder="password" />
         </div>
         <div>
           <input name="phoneNumber" onChange={this.handleChange} type="tel" placeholder="phone-number: (555) 555-5555" />
         </div>
         <button className="btn" onClick={this.handleSubmit}>Register</button>
       </div>
     </div>
    )
  }
}
export default withRouter(Register);
