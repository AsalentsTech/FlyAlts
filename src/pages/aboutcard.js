import React from 'react';
import './css/aboutcard.css';
import { useHistory } from 'react-router-dom';

function AboutCard({title, imageUrl, body}) {

    const history = useHistory();

        const goToContactUsPage = () => {
            history.push('/contact');
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
        <div className="card-container1">
            <div className="image-container1">
                <img src={imageUrl} alt='' />
            </div>
            <div className="card-title">
                <h3><font color="#1888ff">{title}</font></h3>
            </div>
            <center>
            <div className="underline1 md-auto"></div>
            </center>
            <div className="card-body">
                <p><font color="white">{body}</font></p>
            </div>
            <div className="card-btn">
            <button 
            type="submit" 
            className="button button1"
            onClick={goToContactUsPage}
            ><font color="white"> View Contact Info </font>
            </button>
            </div>
            </div>
            </div>
    )
}

export default AboutCard