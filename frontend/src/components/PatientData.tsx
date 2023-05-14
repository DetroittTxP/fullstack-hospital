

import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import {Form,Button} from 'react-bootstrap';


const PatientData:React.FC = ()=>{


    useEffect(() => {
        axios.get('')
    },[])
    const [PatientData,SetPatientData] = useState([]);

    return(
       <div>
           
       </div>
    )
}

export default PatientData;