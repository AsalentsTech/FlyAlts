import React, { Component } from 'react';
import './css/instagram.css';

class InstagramTags extends Component {
  constructor() {
    super();
    this.state = {
      instagramTags: []
    };
  }

  componentDidMount() {
    fetch('/api/instagramTags')
    .then(res => res.json())
    .then(instagramTags => this.setState({instagramTags}));

     }

  render() {
    return (
      <div>
        <center>
        <div className="card-containerig">
            <div className="image-containerig">
                <img alt="" src='https://media0.giphy.com/media/rziCMAiW4GfaE/giphy.gif?cid=790b7611d5323cbb139ff45f48348f3213b218ade5773db3&rid=giphy.gif&ct=g' />
            </div>
            <div className="card-title">
            <center>
                <h3><font color="#1888ff">Instagram Tags</font></h3>
                </center>
            </div>
            <center>
            <div className="underlineig md-auto"></div>
            </center>
            <center>
            <h3><font color="white">All available instagram usernames below.</font></h3>
            </center>
            <center>
        <ul><font color="purple">
          {/*
        {this.state.instagramTags.map(instagramTags => 
          <li key={instagramTags.id}>{instagramTags.Name}</li>
        )}
        */}
        <li>Spoofedsynack</li>
        <li>Spoofedsyn</li>
        <li>Spoofedtcp</li>
        <li>Spoofedvm</li>
        <li>Spoofedvps</li>
        <li>Spoofeddedi</li>
        <li>100udp</li>
        <li>Scamlogs</li>
        <li>Hoodscamer</li>
        <li>Creditlog</li>
        <li>Debitlog</li>
        </font>
        </ul>
            </center>
            </div>
            </center>
      </div>
    );
  }
}

export default InstagramTags;
