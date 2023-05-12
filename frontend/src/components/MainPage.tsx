


import React from 'react';
import { Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import { MainPageProps } from '../type';


export const Main:React.FC<MainPageProps>=({VerifiedUsername})=>{
    
    return(
        <div>
            <Navbar bg='light' expand='lg' style={{padding:30,}}>
                  <Navbar.Brand >
                    <img alt=''
                         src='https://cdn-icons-png.flaticon.com/512/4320/4320350.png'
                         width="40"
                         height="40"
                         className="d-inline-block align-top"
                    />
                    {' '}
                     Welcome {VerifiedUsername} </Navbar.Brand>
            </Navbar>
        </div>
    )
}