import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap'
import {Member} from '../type'
 
const Register:React.FC = () => {

    const [registerdata,Setregsiterdata] = useState<Member>({
        username:'',
        password:'',
        email:'',
        tel:''
    })

    const OnInputUser=(e:React.ChangeEvent<HTMLInputElement>)=>{
        Setregsiterdata( prev => {
            return{
                ...prev,
                [e.target.id]:e.target.value
            }
        })
    }

    const onSubmitData=(e:React.ChangeEvent<HTMLFormElement>)=>{
         e.preventDefault();
    }

    return (
        <div >
            <div className='form'>
                <div className='form-header'>
                     <h2>Register</h2>  
                </div>
                <br/>
                <Form onSubmit={onSubmitData} className='form-input'>
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
                    <Form.Group controlId='email'>
                          <Form.Label style={{marginRight:1000}}>Email</Form.Label>
                          <Form.Control onChange={OnInputUser}   style={{width:200}}/>
                    </Form.Group>
                    <br/>
                    <Form.Group controlId='tel'>
                          <Form.Label style={{marginRight:1000}}>Tel</Form.Label>
                          <Form.Control onChange={OnInputUser}   style={{width:200}}/>
                    </Form.Group>
                    <br/>

                    <Button type='submit' id='button'>Register</Button>
                    <br/>
                    <a href="/"  style={{color:'white',marginRight:1000,}}>back</a>
                </Form>
            </div>
        </div>
    )
}

export default Register;