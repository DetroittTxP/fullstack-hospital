import React, { useState, useEffect } from 'react'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import { Routes, Route, useNavigate,useLocation } from 'react-router-dom'
import Queue from './components/Queue'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import PatientData from './components/PatientData'

function App() {
  const [loggedINdata, SetloginData] = useState('')

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if(localStorage.getItem('username') === null){
       navigate('/login')
    }
  }, [])

  const getLoginData = (logindata: string) => SetloginData(logindata)

  return (
    <div className='component'>

      { location.pathname !== '/login' && <Navbar bg='light' expand='lg' style={{ padding: 30, }}>
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
          <Nav.Link onClick={() => navigate('/patientData')} >ข้อมูลผู้ป่วย</Nav.Link>
        </Nav>
        <Nav.Link href='/' onClick={() => localStorage.removeItem('username')} style={{ textAlign: 'end' }}>Logout</Nav.Link>

      </Navbar>}

      <Routes>
        <Route path='/login' element={<Login getLoginData={getLoginData} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/queue' element={<Queue />} />
        <Route path='/patientData' element={<PatientData/>} />
    
      </Routes>


    </div>
  )
}

export default App
