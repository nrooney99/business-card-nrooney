import '../App.css';
import React from 'react';
import mailLogo from '../images/Mail.png'
import linkedinLogo from '../images/Linkedin.png'

export default function BasicInfo (){
    return(
        <div className='basicInfo'>
            <h1>Nicolás Rooney</h1>
            <h2>Industrial Engineering Student</h2>
            <h2> & Software Developer</h2>
            <div className='buttons'>
              <button className='email' onClick={()=>window.location.href="mailto:nrooney@itba.edu.ar"}>
                <img src={mailLogo} />Email
                </button>
              <button className='linkedin' onClick={()=>window.location.href="https://www.linkedin.com/in/nicolas-rooney/"}>
              <img src={linkedinLogo} />Linkedin
                </button>
            </div>
      </div>
    )
}
