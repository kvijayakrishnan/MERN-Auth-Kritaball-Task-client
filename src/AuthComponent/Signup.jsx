import React, {useState} from 'react';
import { Container,Form, Button } from 'react-bootstrap';
import '../AuthStyle/Signup.css';
import { Link, useNavigate } from 'react-router-dom';
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
        password:'',
    })
    const navigate = useNavigate

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({...formData, [name]:value})
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const response = await axios.post(`${env.API_URL}/api/register`, formData)
            console.log(response)
            if(response.data.msg === "User register successfully"){
                alert("Registration is complete please Login")
            }else if(response.data.msg === "User already exists, Please Login"){
                alert("Already have an account please login")
            }else{
                localStorage.setItem('userInfo', JSON.stringify(response.data))
                navigate('/login')
            }
            
        } catch (error) {
            console.log('Error during registration',error)
        }
    }



  return (
    <Container>
        <h1>Register Form</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text'  placeholder='Enter your name'  value={formData.name} onchange={handleChange} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Father Name</Form.Label>
                <Form.Control type='text' placeholder='Enter your father name'  value={formData.fatherName} onchange={handleChange} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Mother Name</Form.Label>
                <Form.Control type='text'  placeholder='Enter your mother name'  value={formData.motherName} onchange={handleChange} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control type='text'  placeholder='Enter your address'  value={formData.address} onchange={handleChange} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type='text'  placeholder='Enter your phone number'  value={formData.phoneNumber} onchange={handleChange} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='text'  placeholder='Enter your email'  value={formData.email} onchange={handleChange} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password'  placeholder='Enter your password'  value={formData.password} onchange={handleChange} required />
            </Form.Group>
            <Button variant='primary' type='submit'>Register</Button>
            <p>Already have a account Please <Link to='/login'>Login</Link> </p>
        </Form>
        
    </Container>
  )
}

export default Signup