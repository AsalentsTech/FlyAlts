import React from 'react';
import ContactCard from './contactcard';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div
    
    >
      <Navbar />
      <center>
        <div className='App'>
        <ContactCard 
        title='Contact Us'
        imageUrl='https://tse3.mm.bing.net/th?id=OIP.1rIKsoSky2alb7z3AHWmagHaED&pid=Api&P=0&w=336&h=184'
        body="If you have any question or concerns feel free to contacts us on any social media or fill out the form to send us a direct message to our email. We will be sure to get back to you a our earliest convenience. Thanks for choosing AsalentsTech ."
        />
        </div>
    </center>
    </div>
  );
};

export default Contact;
