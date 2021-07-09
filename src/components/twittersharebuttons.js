import React from 'react'
import {FacebookShareButton,TwitterShareButton} from 'react-share';
import {FacebookIcon,TwitterIcon} from 'react-share';

function twittersharebuttons() {
    return (
        <div>
            <container>
                <segment>
                    <FacebookShareButton url="https://www.youtube.com/channel/UCAfh7XnP3qeKIFMiyKSFN2Q" quote="Subscribe to my youtube channel!" hashtag="#ASALENTSVPNS">
                        <FacebookIcon localFillColor="white">AsalentsvpnsGaming</FacebookIcon>
                    </FacebookShareButton>
                    <TwitterShareButton url="https://twitter.com/asalentsvpns" quote="Follow me on twitter!" hashtag="#asalentsvpns">
                        <TwitterIcon localFillColor="white">asalentsvpns</TwitterIcon>
                    </TwitterShareButton>
                </segment>
            </container>
        </div>
    )
}

export default twittersharebuttons
