import '../App.css';
import React from 'react';
import facebookLogo from '../images/Facebook.png'
import twitterLogo from '../images/Twitter.png'
import instagramLogo from '../images/Instagram.png'
import githubLogo from '../images/GitHub.png'

export default function Footer(){
    return(
        <div className='footer'>
          <div className='logos'>
            <a href='https://twitter.com'><img src={twitterLogo} /></a>
            <a href='https://es-la.facebook.com/'><img src={facebookLogo}/></a>
            <a href='https://www.instagram.com/nico.rooney/'><img src={instagramLogo}/></a>
            <a href='https://github.com/nrooney99'><img src={githubLogo}/></a>
          </div>
    </div>
            ) 
}