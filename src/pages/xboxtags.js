import React, { Component } from 'react';
import './css/xbox.css';

class XboxTags extends Component {
  constructor() {
    super();
    this.state = {
        xboxTags: []
    };
  }

  componentDidMount() {
    fetch('/api/xboxTags')
    .then(res => res.json())
    .then(xboxTags => this.setState({xboxTags}));
  }

  render() {
    return (
      <div>
        <center>
        <div className="card-containerxbox">
            <div className="image-containerxbox">
                <img alt="" src='https://media4.giphy.com/media/RhkOyzPfE0f3ygSM55/giphy.gif?cid=790b761104f4c10181139de203cab0adbea8da6377cccfd3&rid=giphy.gif&ct=g' />
            </div>
            <div className="card-title">
            <center>
                <h3><font color="#1888ff">Xbox Tags</font></h3>
                </center>
            </div>
            <center>
            <div className="underlinexbox md-auto"></div>
            </center>
            <center>
            <h3><font color="white">All available xbox usernames below.</font></h3>
            </center>
            <center>
            <ul><font color="purple">
        {/*
        {this.state.xboxTags.map(xboxTags => 
          <li key={xboxTags.id}>{xboxTags.Name}</li>
        )}
        */}
        <li>Wqlrc</li>
        <li>uhzd</li>
        <li>EXXi</li>
        <li>Yej7</li>
        </font>
        </ul>
            </center>
            </div>
            </center>
      </div>
    );
  }
}

export default XboxTags;
