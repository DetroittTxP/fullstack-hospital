

import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import { Table} from 'react-bootstrap';


const PatientData:React.FC = ()=>{


    const [PatientData,SetPatientData] = useState([]);

    
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
                      <th>วันที่เข้าตรวจ</th>
                    
                      
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                    </tr>
                </tbody>
           </Table>
       </div>
    )
}

export default PatientData;