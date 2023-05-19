import React,{useState} from 'react'

import {Routes,Route} from 'react-router-dom'
import PatientData from './components/PatientData'
import QueueRecceipt from './components/Queue/QueueReceipt'
import Queue from './components/Queue/Queue'
import Login from './components/ีUserManage/Login'
import Register from './components/ีUserManage/Register'
import Callqueue from './components/Queue/Callqueue'
import { QueuePatient } from './type'

export const Router:React.FC = () =>{
    const [Edituser,SetEdituser] = useState<QueuePatient>({
      id:0,
      name:'',
      age:'',
      address:'',
      creator:'',
      date:'',
      gender:'',
      id_card:''
    });


    const onGetuser=(data:QueuePatient)=>{
          SetEdituser(data)
    }


    return(
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/queue' element={<Queue />} />
          <Route path='/patientData' element={<PatientData Getreceipt={onGetuser} />} />
          <Route path='/receipt' element={<QueueRecceipt queuedata={Edituser}  />}/>
          <Route path='/callqueue' element={<Callqueue/>}/>
      </Routes>
    )
}