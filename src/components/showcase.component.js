import React, { useRef } from 'react';
import "../assets/css/email.css"

function Template({ message }) {
  const messageRef = useRef(null);

  const handleLinkClick = (e) => {
    e.preventDefault();
    const url = e.target.href;
    window.open(url, '_blank');
  };

  const handleContainerClick = (e) => {
    const { tagName } = e.target;
    if (tagName === 'A') {
      handleLinkClick(e);
    }
  };

  return (
    <div className='msgbg' ref={messageRef} onClick={handleContainerClick}>
      <h4>From: {message.from}</h4>
      <h4>Subject: {message.subject}</h4>
      <h4>Date: {message.date}</h4>
      <div dangerouslySetInnerHTML={{ __html: message.htmlBody }} />
    </div>
  );
}

export default Template;
