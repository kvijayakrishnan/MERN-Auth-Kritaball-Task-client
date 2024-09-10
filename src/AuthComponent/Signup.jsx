import React, {useState} from 'react';
import { Container,Form, Button } from 'react-bootstrap';
import '../AuthStyle/Signup.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'
import env from 'react-dotenv';



function Signup() {
    const [formData, setFormData] = useState({
        userName:'',
        fatherName:'',
        motherName:'',
        address:'',
        phoneNumber:'',
        email:'',
        password:''
    })
    
    
    const navigate = useNavigate()

    
    const {userName, fatherName, motherName, address, phoneNumber, email, password} = formData;

    const onChange = e=> setFormData({...formData, [e.target.name]:e.target.value})

    const onSubmit = async e=>{
        e.preventDefault();
        const newUser = {userName, fatherName, motherName, address, phoneNumber, email, password};
        try {
            const res = await axios.post('https://kvijayakrishnan-mern-auth-kritaball-task.onrender.com/api/register', newUser);
            console.log(res.data)
            if(res.data.msg === "Internal server error"){
                            alert("Server busy Please try again after some time")
                        }else if(res.data.msg === "User already exists, Please Login"){
                            alert("Already have an account please login")
            
                        }else{
                            localStorage.setItem('userInfo', JSON.stringify(res.data))
                            navigate('/login')
                        }

        } catch (error) {
            console.log(error.res.data)
        }
    }


  return (
    <Container>
        <h1>Register Form</h1>
        <Form onSubmit={e=> onSubmit(e)}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder='Enter your name' name='userName' value={userName} onChange={e=> onChange(e)}  required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Father Name</Form.Label>
                <Form.Control type='text' placeholder='Enter your father name' name='fatherName' value={fatherName} onChange={e=> onChange(e)} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Mother Name</Form.Label>
                <Form.Control type='text'  placeholder='Enter your mother name' name='motherName' value={motherName} onChange={e=> onChange(e)} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control type='text'  placeholder='Enter your address' name='address' value={address} onChange={e=> onChange(e)} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type='text'  placeholder='Enter your phone number' name='phoneNumber' value={phoneNumber} onChange={e=> onChange(e)} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='text'  placeholder='Enter your email' name='email' value={email} onChange={e=> onChange(e)} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password'  placeholder='Enter your password' name='password' value={password} onChange={e=> onChange(e)}  required />
            </Form.Group>
            <Button variant='primary' type='submit' value='Register'>Register</Button>
            <p>Already have a account Please </p><Link to='/login'><Button variant='primary' >Login</Button></Link>
        </Form>
        
    </Container>
  )
}

export default Signup