import React, { useState,useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { FaArrowRight,FaArrowLeft } from 'react-icons/fa';
import '../assets/css/messageBox.css';
import {getMail,getMsg} from '../service/message.service'
import Template from './showcase.component';

function MessageBox({ onClose, selectedRowData }) {

  //selectedRowData.id

  const [message, setMessage] = useState('');

  let id = selectedRowData.id;
  const getMessage = async () => {
    try {
      const response = await getMsg(id);
      if(response){
        console.log("msg resp",response )
        setMessage(response); // update the state variable with the response data
      }
    } catch (err) {
      console.log(err);
    }
  };



  useEffect(() => {
    getMessage()
  }, []);

  return (
    <>
      <div className="box">
        <button className='iconbtn' onClick={onClose}><FaArrowLeft/></button>
        {/* <ul className="flex-container space-between">
          <li className="flex-item">Sender: {selectedRowData.from}</li>
          <li className="flex-item">Title: {selectedRowData.title}</li>
        </ul>
        <div className="listing">
          <p>Insert message content here...</p>
        </div> */}
        <div>
          <Template  message={message}/>
        </div>
      </div>
    </>
  );
}

function Inbox() {
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  function handleViewMessageClick(rowData) {
    setSelectedRowData(rowData);
    setShowMessageBox(true);
  }

  const columns = [
    {
      name: '',
      selector: row => row.from,
    },
    {
      name: '',
      selector: row => row.subject,
    },
    {
      name: '',
      selector: row => row.id,
      cell: row => <button className='iconbtn' onClick={() => handleViewMessageClick(row)}> <FaArrowRight/>  </button>,
    },
  ];

  

  function handleCloseMessageBox() {
    setShowMessageBox(false);
  }

  const [mailList, setMailList] = useState([]);

  const getEmailList = async () => {
    try {
      const response = await getMail();
      if(response){

        setMailList(response); // update the state variable with the response data
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      getEmailList();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {showMessageBox ? (
        <MessageBox onClose={handleCloseMessageBox} selectedRowData={selectedRowData} />
      ) : (
        <div className="box">
          <ul className="flex-container space-between">
            <li className="flex-item">Sender</li>
            <li className="flex-item">Title</li>
            <li className="flex-item">View</li>
          </ul>
          <div className="listing">
            <DataTable columns={columns} data={mailList} noTableHead />
          </div>
        </div>
      )}
    </>
  );
}

export default Inbox;
