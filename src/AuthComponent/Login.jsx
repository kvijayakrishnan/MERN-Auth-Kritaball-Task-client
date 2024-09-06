import React, {useState} from 'react';
import {useFormik} from 'formik'
import { Container,Form, Button } from 'react-bootstrap';
import '../AuthStyle/Login.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'
import env from 'react-dotenv';



const Login = () => {
    const navigate =useNavigate()
    const [formData, setFormData] = useState(false)

    const {handleChange, value, handleSubmit} = useFormik({
        initialValues:{
            username:'',
            password:''
        },
        onSubmit: async (value) =>{
            try {
                setFormData(true);
                const login = await axios.post("http://localhost:4000}/api/login", value);
                console.log(login)
                if(login.data.token){
                    localStorage.setItem('react_token', login.data.token)
                    localStorage.setItem("userName", login.data.username.username);
                    localStorage.setItem("userEmail", login.data.username.email);
                    navigate("/profile");
                    setFormData(false);
          
                }else{
                    setFormData(false)
                }
                
            } catch (error) {
                console.log(error)
            }
        }
    })

    
    //   const handleChange = (e) =>{
    //     const {name, value} = e.target;
    //     setFormData({...formData, [name]:value})
    //   }
    
    //   const handleSubmit = async(e) =>{
    //     e.preventDefault();
    //     try {
    //       const response = await axios.post(`http://localhost:4000/api/update/66da9a5735ae005ce9bd0b29/api/login`, formData)
    //       console.log(response);
    //       if (response.data.msg === "Invalid Username or password") {
    //         alert("Invalid User")
    //       } else if(response.data.msg === "server busy"){
    //         alert("Verify user id and password")
    //       }else{
    //         localStorage.setItem("userInfo", JSON.stringify(response.data))
    //         navigate("/home")
    //       }

          
    //     } catch (error) {
    //       console.log("Error during login",error)
    //     }
    //   }
    
  return (
    <Container>
      <h1>Login Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type='text' name='email' placeholder='Enter Your Email' value={formData.email} onChange={handleChange} required />
          <p>Eg : vijaykrishnanbk@gmail.com</p>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type='text' name='password' placeholder='Enter your password' value={formData.password} onChange={handleChange} required />
          <p>Eg : 123456789</p>
        </Form.Group>
        <Button variant='primary' type='submit' >Login</Button>
      </Form>
    </Container>
  )
}

export default Login