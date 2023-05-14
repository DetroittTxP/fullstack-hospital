import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { QueuePatient } from '../type';

const Queue: React.FC = () => {
    
    
    return (
        <div className='sub-component'>
            <h2 >ระบบจองคิว</h2>
            <br />
            <div className='queue-form'>
                <Form>
                    <Form.Group controlId='name'>
                        <Form.Label style={{ marginRight: 145 }}>ชื่อผู้ป่วย</Form.Label>
                        <Form.Control type='text' style={{ width: 200 }} />
                    </Form.Group>

                    <Form.Group controlId='age'>
                        <Form.Label style={{ marginRight: 173 }}>อายุ</Form.Label>
                        <Form.Control type='text' style={{ width: 200 }} />
                    </Form.Group>

                    <Form.Group controlId='gender'>
                        <Form.Label style={{ marginRight: 173 }}>เพศ</Form.Label>
                        <Form.Select style={{ width: 100 }}  >
                            <option>Please Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId='date'>
                        <Form.Label style={{ marginRight: 170 }}>วันที่ื</Form.Label>
                        <Form.Control type='date' />
                    </Form.Group>

                    <Form.Group controlId='address'>
                        <Form.Label style={{ marginRight: 170 }}>ทีอยู่</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Form.Group controlId='id_card'>
                        <Form.Label style={{ marginRight: 50}}>เลขประจำตัวประชาชน</Form.Label>
                        <Form.Control type='text' style={{ width: 200 }} />
                    </Form.Group>
                    <br/>
                    <Button style={{backgroundColor:'white',color:'black'}}>จองคิว</Button>
                </Form>
            </div>

        </div>
    )
}

export default Queue;