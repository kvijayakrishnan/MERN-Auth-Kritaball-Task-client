// import React, { useEffect, useState } from 'react'
// import { Container, Button } from 'react-bootstrap'
// // import '../AuthStyles/Home.css'
// import axios from 'axios'
// import env from 'react-dotenv';
// import { Navigate, useNavigate, useParams } from 'react-router-dom';



// const Home = () => {
//   const [user, setUser] = useState([])
//   const [error, setError] = useState(null);
//   const navigate = useNavigate()
//   const params = useParams()
//   // useEffect(() =>{
//   //   const token = localStorage.getItem("userInfo")
//   //   if(!token){
//   //     navigate('/login');
//   //   }
    
//   //   const fetchUser = async() =>{
//   //     try {
//   //       const res =await axios.get('http://localhost:4000/api/profile/:id',{
//   //         headers:{
//   //           'x-auth-token':token,
//   //         },
//   //       });
//   //       setUser(res.data)
//   //     } catch (error) {
//   //       setError('Failed to fetch the data')
//   //     }
//   //   }
//   //   fetchUser()
//   // },[navigate])

// useEffect(() =>{
//   const userID= params.id
// })



  


//   return (
//     <Container>
//       <div>Profile page</div>
//       <p>My Profile</p>
//       {/* <p>{res.name}</p> */}
//       <ul>
//         {user.map(user =>(
//           <li key={user._id}>
//             <p>{user.userName}</p>
//             <p>{user.fatherName}</p>
//             <p>{user.motherName}</p>
//             <p>{user.address}</p>
//             <p>{user.phoneNumber}</p>
//             <p>{user.email}</p>
//           </li>
//         ))}
//       </ul>


//       <Button variant='primary' type='submit'>
//         Update
//       </Button>
//     </Container>
//   )
// }

// export default Home;

import React, {useState} from 'react';
import { Container,Form, Button } from 'react-bootstrap';
import '../AuthStyle/Signup.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'
import env from 'react-dotenv';



function Home() {



  return (
    <Container>
        <h1>Profile</h1>
        <Form>
            <Form.Group>
                <Form.Label>Name : </Form.Label>
                {/* <Form.Control type='text' placeholder='Enter your name' name='userName' value={userName} onChange={e=> onChange(e)}  required /> */}
            </Form.Group>
            <Form.Group>
                <Form.Label>Father Name</Form.Label>
                {/* <Form.Control type='text' placeholder='Enter your father name' name='fatherName' value={fatherName} onChange={e=> onChange(e)} required /> */}
            </Form.Group>
            <Form.Group>
                <Form.Label>Mother Name</Form.Label>
                {/* <Form.Control type='text'  placeholder='Enter your mother name' name='motherName' value={motherName} onChange={e=> onChange(e)} required /> */}
            </Form.Group>
            <Form.Group>
                <Form.Label>Address</Form.Label>
                {/* <Form.Control type='text'  placeholder='Enter your address' name='address' value={address} onChange={e=> onChange(e)} required /> */}
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                {/* <Form.Control type='text'  placeholder='Enter your phone number' name='phoneNumber' value={phoneNumber} onChange={e=> onChange(e)} required /> */}
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                {/* <Form.Control type='text'  placeholder='Enter your email' name='email' value={email} onChange={e=> onChange(e)} required /> */}
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                {/* <Form.Control type='password'  placeholder='Enter your password' name='password' value={password} onChange={e=> onChange(e)}  required /> */}
            </Form.Group>
            {/* <Button variant='primary' type='submit' value='Register'>Register</Button> */}
            <Link to='/update'><Button variant='primary' >Login</Button></Link>
        </Form>
        
    </Container>
  )
}

export default Home


