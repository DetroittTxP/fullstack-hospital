import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap'

import {Logindata} from '../type'

const Login:React.FC = () => {

    const [users,Setusers] = useState<Logindata>({
        username:'',
        password:'',
    })

    const OnInputUser=(e:React.ChangeEvent<HTMLInputElement>)=>{
        Setusers( prev => {
            return{
                ...prev,
                [e.target.id]:e.target.value
            }
        })
    }

    return (
        <div >
            <div className='form'>
                <div className='form-header'>
                     <h2>Please Login</h2>  
                </div>
                <br/>
                <Form className='form-input'>
                    <Form.Group controlId='username'>
                          <Form.Label style={{marginRight:1000}}>Username</Form.Label>
                          <Form.Control onChange={OnInputUser}  style={{width:200}}/>
                    </Form.Group>
                    <br/>
                    <Form.Group controlId='password'>
                          <Form.Label style={{marginRight:1000}}>Password</Form.Label>
                          <Form.Control onChange={OnInputUser}   style={{width:200}}/>
                    </Form.Group>
                    <br/>
                    <Button type='submit' id='button'>Login</Button>
                    <br/>
                    <a href="/register"  style={{color:'white',marginRight:1000,}}>register</a>
                </Form>
            </div>
        </div>
    )
}

export default Login;