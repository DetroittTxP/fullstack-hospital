import React,{ useState } from 'react'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import { Main } from './components/MainPage'
import {Routes,Route} from 'react-router-dom'
import Queue from './components/Queue'

function App() {
  const [loggedINdata,SetloginData] = useState('')

  const getLoginData = (logindata:string) => SetloginData(logindata)
  console.log(loggedINdata,'from app');
  
  return (
    <div className='component'>
          <Routes>
               <Route path='/'  element={<Login getLoginData={getLoginData}/>}/>
               <Route path='/register' element={<Register/>}/>
               <Route path='/main' element={<Main/>}/>
               <Route path='/queue' element={<Queue/>}/>
          </Routes>

       
    </div>
  )
}

export default App
