import React, {  useEffect } from 'react'
import './App.css'

import {  useNavigate, useLocation } from 'react-router-dom'

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import { Router } from './Router'

function App() {

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem('username') === null) {
      navigate('/login')
    }

  }, [])



  return (
    <div className='component'>

      {location.pathname !== '/login' && <Navbar bg='light' expand='lg' style={{ padding: 30, }}>
        <Navbar.Brand >
          <img alt=''
            src='https://cdn-icons-png.flaticon.com/512/4320/4320350.png'
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
          {' '}
          Welcome {localStorage.getItem('username')?.replace(/^"(.*)"$/, '$1')}
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link onClick={() => navigate('/main')}>Home</Nav.Link>
          <Nav.Link onClick={() => navigate('/queue')} >จองคิวตรวจ</Nav.Link>
          <Nav.Link onClick={() => navigate('/patientData')} >ข้อมูลคิวตรวจผู้ป่วย</Nav.Link>
        </Nav>
        <Nav.Link style={{marginRight:20}}>เเก้ไขข้อมูลผู้ใช้</Nav.Link>
        <Nav.Link href='/' onClick={() => localStorage.removeItem('username')} style={{ textAlign: 'end' }}>Logout</Nav.Link>
        
     
      </Navbar>}

      <Router/>


    </div>
  )
}

export default App
