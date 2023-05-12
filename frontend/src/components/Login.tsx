import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap'
import axios  from 'axios';
import {Logindata} from '../type'
import {  useNavigate }  from 'react-router-dom'
import { LoginProps } from '../type';

const Login:React.FC<LoginProps> = ({getLoginData}) => {

    const navigate = useNavigate();
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

    const OnSubmitLogin= async (e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        await axios.post('http://localhost:5555/login',{users}) // gettoken
        .then(res => {
            Verify(res.data.token)  
            
            
        })
        .catch(err=>{
            alert(err)
        })
    }

    const Verify = async (token:String) => {
        console.log('token from Verfy',token);
        await axios.post('http://localhost:5555/verify',null,{headers: { authorization: `Bearer ${token}` }})
        .then(res => {
            console.log(res.data);

            if(res.data.status !== 'verified'){
                alert('login failed')
            }
            else{
                
                getLoginData(res.data.token.username)
                localStorage.setItem('username',JSON.stringify(res.data.token.username))
                navigate('/main')
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
                <Form onSubmit={OnSubmitLogin} className='form-input'>
                    <Form.Group controlId='username'>
                          <Form.Label style={{marginRight:1000}}>Username</Form.Label>
                          <Form.Control onChange={OnInputUser}  style={{width:200}}/>
                    </Form.Group>
                    <br/>
                    <Form.Group controlId='password'>
                          <Form.Label style={{marginRight:1000}}>Password</Form.Label>
                          <Form.Control type='password' onChange={OnInputUser}   style={{width:200}}/>
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