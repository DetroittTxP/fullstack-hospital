

import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import { Table} from 'react-bootstrap';
import { QueuePatient } from '../type';


const PatientData:React.FC = ()=>{


    const [PatientData,SetPatientData] = useState<QueuePatient[]>([{
        name:'',
        age:'',
        gender:'',
        address:'',
        id_card:'',
        date:''
    }]);

    

    useEffect(() => {
        axios.get('http://localhost:5555/getqueuedata')
        .then(res => {
            SetPatientData(res.data)
        })
        .catch(err=> alert(err))          

    },[])

    return(
       <div className='table-patient'>
           <Table className='table' style={{width:1450,backgroundColor:'white',borderRadius:5}}>
                <thead>
                      <th>ชื่อผู้ป่วย</th>
                      <th>อายุ</th>
                      <th>เพศ</th>
                      <th>ที่อยู่</th>
                      <th>รหัสประจำตัว</th>
                      <th>วันที่จองเข้าตรวจ</th>
                </thead>

                <tbody>
                    {PatientData.map((value,index)=> {
                        return(
                            <tr key={index}>
                                <td>{value.name}</td>
                                <td>{value.age}</td>
                                <td>{value.gender}</td>
                                <td>{value.address}</td>
                                <td>{value.id_card}</td>
                                <td>{value.date}</td>
                            </tr>
                        )
                    })}
                </tbody>
           </Table>
       </div>
    )
}

export default PatientData;