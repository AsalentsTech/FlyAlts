import React, {useState} from 'react';
import './css/contact.css';
import Navbar from '../components/Navbar';
import  emailjs from 'emailjs-com';

function ContactFormCard({title, imageUrl, body}) {

    const [messageStatus, setMessageStatus] = useState("Feel free to contact us!");

    const sendEmailContactForm = (e) => {
        e.preventDefault();
        emailjs.sendForm(
        'service_vqu9m6h', 
        'template_u03o6fs', 
        e.target, 
        'user_ftc9yeb7s9ljIcpuH1QGM'
        ).then(res => {
            setMessageStatus("Thanks for contacting us, we will get back to you asap!")
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
                <Navbar />
                <div
    style={{
      background: "./img/FlyAlts.gif",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '82vh'
      }}
    >
                <div className="card-container4">
            <div className="image-containercontact">
                <img alt="" src='https://agencybash.com/wp-content/uploads/2019/10/giphy-1.gif' />
            </div>
            <div className="card-title">
            <center>
                <h3><font color="#1888ff">Contact Us</font></h3>
                </center>
            </div>
            <center>
            <div className="underline4 md-auto"></div>
            </center>
            <center>
            <h4><font color="red">{messageStatus}</font></h4>
            </center>
            <h4><font color="red"></font></h4>
            <center>
            <form
            onSubmit={sendEmailContactForm}
            >
            <label className="contact-form-labels">Name</label><br />
            <input 
            className="contact-form-inputs"
            type="text"
            name="name"
            placeholder="Your Name"
            autoComplete="name"
            required
            />
            <br />
            <label className="contact-form-labels">Email</label><br />
            <input 
            className="contact-form-inputs"
            type="email"
            name="user_email"
            placeholder="Email"
            autoComplete="email"
            required
            />
            <br />
            <label className="contact-form-labels">Message</label><br />
            <input 
            className="contact-form-inputs"
            type="text"
            name="message"
            rows="4"
            placeholder="Message"
            autoComplete="message"
            required
            />
            <br />
            <div className="card-btn">
            <button type="submit" className="button button1"><font color="white"> Send Email</font></button>
            </div>
            </form>
            </center>
            </div>
                </div>
            </div>
    )
}

export default ContactFormCard
