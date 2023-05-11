import React,{ useState } from 'react'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className='component'>
          <Routes>
               <Route path='/' element={<Login/>}/>
               <Route path='/register' element={<Register/>}/>
          </Routes>
    </div>
  )
}

export default App
