import React from 'react'
import { useState } from 'react';

// import { Container, Row, Col } from 'react-bootstrap'
import "../assets/css/messageBox.css"
import { FaArrowRight } from 'react-icons/fa';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: '',
        selector: row => row.id,
    },
    {
        name: '',
        selector: row => row.title,
    },
    {
        name: 'View',
        selector: row => row.year,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
];




  
function MessageBox() {




    return (
        <>
            <div className='box'>
                <ul className="flex-container space-between">
                    <li className="flex-item">Sender</li>
                    <li className="flex-item">Title</li>
                    <li className="flex-item">View</li>

                </ul>

                <div className='listing'>
                    <DataTable
                        columns={columns}
                        data={data}
                        noTableHead
                    />
                </div>
                
            </div>

        </>
    )
}

export default MessageBox