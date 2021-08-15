import React from 'react';
import { SendEmail } from '../../components';
import './style.css';
const ContactMe = () => {
  return (
    <div id="contact">
      <h1>Contact Me</h1>
      <SendEmail />
    </div>
  );
};

export default ContactMe;
