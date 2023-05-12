


import React,{useState,useEffect} from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { MainPageProps } from '../type';
import { Routes, Route } from 'react-router-dom'
import Queue from './Queue';

import axios from 'axios';

export const Main: React.FC = () => {
  
    
    
 
    return (
        <div>
            <Navbar bg='light' expand='lg' style={{ padding: 30, }}>
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
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link onClick={() => alert('im gere')} >Booking</Nav.Link>

                </Nav>
                <Nav.Link href='/' onClick={()=>localStorage.removeItem('username')} style={{ textAlign: 'end' }}>Logout</Nav.Link>

            </Navbar>

            <div className='content'>
                <Queue/>

            </div>
        </div>
    )
}