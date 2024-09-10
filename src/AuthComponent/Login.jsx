import React, {useState} from 'react';
import { Container,Form, Button } from 'react-bootstrap';
import '../AuthStyle/Signup.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'
import env from 'react-dotenv';



function Login() {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    
    
    const navigate = useNavigate()

    
    const {email, password} = formData;

    const onChange = e=> setFormData({...formData, [e.target.name]:e.target.value})

    const onSubmit = async e=>{
        e.preventDefault();
        const user = { email, password };
        try {
            const res = await axios.post('https://kvijayakrishnan-mern-auth-kritaball-task.onrender.com/api/login', user);
            console.log(res.data)
            if(res.data.msg === "Internal server error"){
                            alert("Server busy Please try again after some time")
                        }else if(res.data.msg === 'User is not found please register'){
                          alert("User is not found, Please do register and login")
                        } else if(res.data.msg === "Invalid credentials"){
                            alert("Invalid credentials")
            
                        }else{
                            localStorage.setItem('userInfo', JSON.stringify(res.data))
                            navigate('/home')
                        }

        } catch (error) {
            console.log(error.res.data)
        }
    }


  return (
    <Container>
        <h1>Login Form</h1>
        <Form onSubmit={e=> onSubmit(e)}>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='text'  placeholder='Enter your email' name='email' value={email} onChange={e=> onChange(e)} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password'  placeholder='Enter your password' name='password' value={password} onChange={e=> onChange(e)}  required />
            </Form.Group>
            <Button variant='primary' type='submit' value='Login'>Login</Button>
        </Form>
        
    </Container>
  )
}

export default Login