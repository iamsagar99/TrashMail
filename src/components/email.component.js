import React from 'react'
import "../assets/css/email.css"
import { FaCopy } from 'react-icons/fa';

//<button onclick=""><FaCopy/></button>
function Email() {
  return (
    <>
        <div className="emailbox">
            <p>Your Temporary Email Address </p>
            <div class="row">
                <input type="text" id="myInput" readonly value="Hello World"/>
                <button className="back">
                 <FaCopy color='white' size="25px"/>
              
                </button>
            </div>
        </div>
    
    </>
  )
}

export default Email