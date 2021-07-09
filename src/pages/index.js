import React, { Component } from 'react';
import './css/style.css';
import InstagramTags from './instagram';
import XboxTags from './xboxtags';
import Navbar from '../components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar /><br />
          <center>
          <img alt="" height="200px" width="450px" src="https://cdn.discordapp.com/attachments/833472712600322069/862555405325434900/standard_6-1.gif" />
          </center>
        <InstagramTags />
        <XboxTags />
      </div>
    );
  }
}

export default App;
