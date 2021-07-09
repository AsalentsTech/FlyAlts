import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
  import './socialfollowbuttons.css'

export default function SocialFollow() {
  return (
    <div className="social-container">
      <h3><font color="#1888ff">Follow Us</font></h3>
      <center>
      <div className="underline3 md-auto"></div>
      </center>
      <br />
      <a href="https://www.youtube.com/channel/UCAfh7XnP3qeKIFMiyKSFN2Q"
  className="youtube social">
  <FontAwesomeIcon icon={faYoutube} size="2x" />
</a>
<a href="https://www.facebook.com/AsalentsvpnsGaming/"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://www.twitter.com/asalentsvpns" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href="https://www.instagram.com/asalentsvpns"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
</div>
  );
}