import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { QueuePatient } from '../../type';
import axios from 'axios';

const Queue: React.FC = () => {
    const [patientdata, Setpatientdata] = useState<QueuePatient>({
        id:0,
        name: '',
        age: '',
        gender: '',
        date: '',
        address: '',
        id_card: '',
        creator:localStorage.getItem('username')?.replace(/^"(.*)"$/, '$1')
    })

    const Oninputdata = (e: React.ChangeEvent<HTMLInputElement>) => {

        Setpatientdata(prev => {
            return {
                ...prev,
                [e.target.id]: e.target.value
            }
        })
    }

    const onInputSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        Setpatientdata(prev => {
            return {
                ...prev,
                [e.target.id]: e.target.value
            }
        })
    }

    const onSubmitPatientData = async (e:React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();
        await axios.post('http://localhost:5555/insertqueuedata',patientdata)
        .then(_ => {
            alert('บันทึกข้อมูลเรียบร้อยเเล้ว')
            
        })
        .catch(err=>{
            alert(err)
        })

    }
    


    return (
        <div className='sub-component'>
            <h2 >ระบบจองคิว</h2>
            <br />
            <div className='queue-form'>
                <Form onSubmit={onSubmitPatientData}>
                    <Form.Group controlId='name'>
                        <Form.Label style={{ marginRight: 145 }}>ชื่อผู้ป่วย</Form.Label>
                        <Form.Control required onChange={Oninputdata} type='text' style={{ width: 200 }} />
                    </Form.Group>

                    <Form.Group controlId='age'>
                        <Form.Label style={{ marginRight: 173 }}>อายุ</Form.Label>
                        <Form.Control required onChange={Oninputdata} type='text' style={{ width: 200 }} />
                    </Form.Group>

                    <Form.Group controlId='gender'>
                        <Form.Label style={{ marginRight: 173 }}>เพศ</Form.Label>
                        <Form.Select required onChange={onInputSelect} style={{ width: 100 }}  >
                            <option>Please Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId='date'>
                        <Form.Label style={{ marginRight: 170 }}>วันที่ื</Form.Label>
                        <Form.Control required onChange={Oninputdata} type='date' />
                    </Form.Group>

                    <Form.Group controlId='address'>
                        <Form.Label style={{ marginRight: 170 }}>ทีอยู่</Form.Label>
                        <Form.Control required onChange={Oninputdata} as="textarea" rows={3} />
                    </Form.Group>

                    <Form.Group controlId='id_card'>
                        <Form.Label style={{ marginRight: 50 }}>เลขประจำตัวประชาชน</Form.Label>
                        <Form.Control required onChange={Oninputdata} type='text' style={{ width: 200 }} />
                    </Form.Group>

                   
                    <br />
                    <Button type='submit' style={{ backgroundColor: 'white', color: 'black' }}>จองคิว</Button>
                </Form>
            </div>
        </div>
    )
}

export default Queue;