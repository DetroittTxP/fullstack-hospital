import { useState, FC, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap'
import { QueuePatient } from '../../type';
import axios from 'axios';

const Callqueue: FC = () => {

    const LoggedInUsername = localStorage.getItem('username')?.replace(/^"(.*)"$/, '$1')
  
    
    const [patientqueue, Setpatientqueue] = useState<QueuePatient[]>([{
        id: 0,
        name: '',
        age: '',
        gender: '',
        address: '',
        id_card: '',
        date: '',
        creator: LoggedInUsername || undefined
    }]);
    const [runqueue,Setrunqueue] = useState<number>(1);


    useEffect(() => {
        axios.get(`http://localhost:5555/getqueuedata?LoggedInUsername=${LoggedInUsername}`)
        .then(res => {
            Setpatientqueue(res.data)
        })
        .catch(err=> alert(err))          

    },[])

    const onCallnextQueue=(id:number)=>{


        if(patientqueue.length === 1){
            alert('No more queue');
            return;
        }
        let newqueue = patientqueue.filter((e) => e.id !== id)
        Setpatientqueue(newqueue)
        Setrunqueue(runqueue+1);

    }



    return (
        <div className='callqueue-patient'>
            <div className='callqueue-card' >

                <Card style={{position:'relative',top:50}}>
                    <Card.Body>
                        <Card.Title>คิวที่ {runqueue}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">วันที่ {patientqueue[0].date}</Card.Subtitle>
                        <Card.Text>
                          ชื่อ: {patientqueue[0].name}<br/>
                          อายุ: {patientqueue[0].age}<br/>
                          เพศ: {patientqueue[0].gender}<br/>
                          ที่อยู่: {patientqueue[0].address}<br/>
                          เลขประจำตัว: {patientqueue[0].id_card}
                        </Card.Text>
                        <Button onClick={()=>onCallnextQueue(patientqueue[0].id)} style={{marginLeft:20}}>คิวถัดไป</Button>
                        
                    </Card.Body>
                </Card>

            </div>

        </div>



    )
}

export default Callqueue;