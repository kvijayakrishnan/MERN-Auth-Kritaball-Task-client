import React, { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap'
// import '../AuthStyles/Home.css'
import axios from 'axios'
import env from 'react-dotenv';



const Home = () => {

  useEffect(() =>{
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if(user && user.token){
      getData(user.token)
    }
  },[])

  const [res, setRes] = useState({})

  const getData = async(token) =>{
    try {
    //   const config ={
    //     headers:{
    //       Authorization:token
    //     }
    //   }

      const response = await axios.get(`${env.API_URL}/home`, /*config*/ )
      console.log(response);
      if (response.data === "Invalid user") {
        alert("login again")
      } if(response.data === "server busy"){
        alert("Un authorized access")
      } else if(response?.status) {
        setRes(response.data)
      }

      
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <Container>
      <div>Home</div>
      <p>We are here to serve You</p>
      <p>{res.name}</p>
      <Button variant='primary' type='submit'>
        Update
      </Button>
    </Container>
  )
}

export default Home;




