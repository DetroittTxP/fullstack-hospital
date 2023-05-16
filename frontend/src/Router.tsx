import React from 'react'

import {Routes,Route} from 'react-router-dom'
import PatientData from './components/PatientData'
import QueueRecceipt from './components/Queue/QueueReceipt'
import Queue from './components/Queue/Queue'
import Login from './components/ีUserManage/Login'
import Register from './components/ีUserManage/Register'

export const Router:React.FC = () =>{




    return(
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/queue' element={<Queue />} />
          <Route path='/patientData' element={<PatientData />} />
          <Route path='/receipt' element={<QueueRecceipt/>}/>

      </Routes>
    )
}