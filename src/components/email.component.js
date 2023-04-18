// import React,{useState,useEffect} from 'react'
// import "../assets/css/email.css"
// import { FaCopy } from 'react-icons/fa';
// import {getId} from '../service/message.service'

// //<button onclick=""><FaCopy/></button>
// function Email() {

//   const [data,setData] = useState();
  

//   const getEmailId = async ()=>{
//     try{
//         let response = await getId();
//          console.log("banner response:",response);
//        if(response.length>0){
//         setData(response[0])
//         localStorage.setItem('mail_id', response[0]);

//        }
//        else{
//         console.log(response)
//        }
//     }catch(err){
//         console.log(err)
//     }
// }


// useEffect(()=>{
//     getEmailId()
// },[])

// console.log("data",data)

// const [copied, setCopied] = useState(false);

// const copyToClipboard = () => {
//   const input = document.getElementById("myInput");
//   navigator.clipboard.writeText(input.value);
//   setCopied(true);
//   setTimeout(() => {
//     setCopied(false);
//   }, 2000);

// }

//   return (
//     <>
//         <div className="emailbox">
//             <p>Your Temporary Email Address </p>
//             <div class="row">
//                 {
//                   data ? (<input type="text" id="myInput" readonly value={data}/>):(<input type="text" id="myInput" readonly value="Loading ..."/>)
//                 }
//                 <button className="back" onClick={copyToClipboard}>
//                  <FaCopy color='white' size="25px"/>
              
//                 </button>
//             </div>
//              {copied && <em className='emtag'>Copied to clipboard</em>}
//         </div>
    
//     </>
//   )
// }

// export default Email
















import React, { useState, useEffect } from 'react';
import '../assets/css/email.css';
import { FaCopy } from 'react-icons/fa';
import { getId } from '../service/message.service';

function Email() {
  const [data, setData] = useState();
  const [countdown, setCountdown] = useState(600);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const input = document.getElementById('myInput');
    navigator.clipboard.writeText(input.value);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  useEffect(() => {
    const timer =
      countdown > 0 &&
      setInterval(() => setCountdown((countdown) => countdown - 1), 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  useEffect(() => {
    const getEmailId = async () => {
      try {
        let response = await getId();
        console.log('banner response:', response);
        if (response.length > 0) {
          setData(response[0]);
          // localStorage.setItem('mail_id', response[0]);
          setCountdown(600);
        } else {
          console.log(response);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getEmailId();

    const interval = setInterval(() => {
      getEmailId();
    }, 600000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <>
      <div className="emailbox">
        <p>
          Your Temporary Email Address{' '}
          {data ? (
            <span className="countdown">{formatTime(countdown)}</span>
          ) : (
            ''
          )}
        </p>
        <div className="row">
          {data ? (
            <input type="text" id="myInput" readOnly value={data} />
          ) : (
            <input type="text" id="myInput" readOnly value="Loading ..." />
          )}
          <button className="back" onClick={copyToClipboard}>
            <FaCopy color="white" size="25px" />
          </button>
        </div>
        {copied && <em className="emtag">Copied to clipboard</em>}
      </div>
    </>
  );
}

export default Email;
