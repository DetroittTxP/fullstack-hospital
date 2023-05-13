


import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { MainPageProps } from '../type';
import { Routes, Route } from 'react-router-dom'
import Queue from './Queue';

import axios from 'axios';

export const Main: React.FC = () => {




    return (
        <div>

            <div className='content'>
                <Queue />

            </div>
        </div>
    )
}