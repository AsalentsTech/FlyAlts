import React from 'react';
import './css/contactcard.css';
import SocialFollow from '../components/socialfollowbuttons';
import { useHistory } from 'react-router-dom';

function ContactCard({title, imageUrl, body}) {

    const history = useHistory();

        const goToContactFormPage = () => {
            history.push('/contact-form');
          }

    return (
        <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh'
      }}
    >
        <div className="card-container3">
            <div className="image-container3">
                <img src={imageUrl} alt='' />
            </div>
            <div className="card-title">
                <h3><font color="#1888ff"> {title}</font></h3>
            </div>
            <center>
            <div className="underline3 md-auto"></div>
            </center>
            <h3><font color="white">{body}</font></h3>
            <br />
            <SocialFollow />
            <br />
            <div className="card-btn">
        <button 
        type="submit" 
        className="button button1"
        onClick={goToContactFormPage}
        ><font color="white"> View Contact Form</font></button>
            </div>
            </div>
            </div>
    )
}

export default ContactCard