import React from 'react'
import './css/contactform.css'
import ContactFormCard from './contactformcard';

function ContactForm() {
    return (
        <div
        style={{
            margin: '87'
            }}
        >

            <center>
        <div className='App'>
        
        <ContactFormCard 
        title='Contact Us'
        imageUrl='https://tse3.mm.bing.net/th?id=OIP.Y7CBdglPRY-kBZv6arDE7QHaEK&pid=Api&P=0&w=298&h=168'
        body="Fill out the form below to contact us with any and all questions or concerns."
        />
        </div>
    </center>
    </div>
    )
}

export default ContactForm
