

import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import { Table,Button } from 'react-bootstrap';
import { QueuePatient } from '../type';
import { useNavigate } from 'react-router-dom';
import { ReceiptFromComponent } from '../type';
const PatientData:React.FC<ReceiptFromComponent> = ({Getreceipt})=>{

    const LoggedInUsername = localStorage.getItem('username')?.replace(/^"(.*)"$/, '$1')

    const [PatientData,SetPatientData] = useState<QueuePatient[]>([{
        id:0,
        name:'',
        age:'',
        gender:'',
        address:'',
        id_card:'',
        date:'',
        creator:LoggedInUsername
    }]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5555/getqueuedata?LoggedInUsername=${LoggedInUsername}`)
        .then(res => {
            SetPatientData(res.data)
        })
        .catch(err=> alert(err))          

    },[])

    const onDelete = (id:number) =>{
        const Deleted = PatientData.filter(e => e.id !== id)
        SetPatientData(Deleted)
    }

    const SelectedQueue = (id:number)=>{
    
        const Selected = PatientData.filter( e => e.id === id)  
        Getreceipt(Selected[0])
         
    }

    return(
       <div className='table-patient'>
           { PatientData.length !== 0 && <Table className='table' style={{width:1450,backgroundColor:'white',borderRadius:5}}>
                <thead>
                      <th>ชื่อผู้ใช้</th>
                      <th>ชื่อผู้ป่วย</th>
                      <th>อายุ</th>
                      <th>เพศ</th>
                      <th>ที่อยู่</th>
                      <th>รหัสประจำตัว</th>
                      <th>วันที่จองเข้าตรวจ</th>
                      <th>result</th>
                      <th>ยืนยัน</th>
                </thead>

                <tbody>
                    {PatientData.map((value,index)=> {
                        return(
                            <tr key={index}>
                                <td>{LoggedInUsername}</td>
                                <td>{value.name}</td>
                                <td>{value.age}</td>
                                <td>{value.gender}</td>
                                <td>{value.address}</td>
                                <td>{value.id_card}</td>
                                <td>{value.date}</td>
                                <td><Button onClick={()=>{
                                    navigate('/receipt')
                                    SelectedQueue(value.id)
                                }}>ดูข้อมูลการจอง</Button></td>
                                <td><Button className='btn btn-danger' onClick={()=>onDelete(value.id)}>กดเมื่อสำเร็จเเล้ว</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
           </Table>}
       </div>
    )
}

export default PatientData;