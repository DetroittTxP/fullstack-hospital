import {useState,FC} from 'react';
import {Button,Card} from 'react-bootstrap'
import { QueuePatient } from '../../type';

const Callqueue:FC = () => {

    const [patientqueue,Setpatientqueue] = useState([1,2,3,4,5,6,7,8,9,10])

    

    return(
        <div className='callqueue-patient'>
             <Button onClick={()=>{Setpatientqueue((prev) => prev.slice(1))}}>Call 1 ST</Button>
             <p>{patientqueue[0]}</p>
        </div>
    )
}

export default Callqueue;