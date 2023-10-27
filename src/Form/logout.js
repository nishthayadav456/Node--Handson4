import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Logout = () => {
    const navi=useNavigate()
    const token=localStorage.getItem("token")
    // console.log(token)
    useEffect(()=>{
        if(token){
            axios.get("http://localhost:4005/",{headers:{"authorization":`Bearer ${token}`}}) //req.headers["authorization"]
            .then(res=>console.log(res.data))
        }
        else{
         navi("/")
        }
    },[token,navi])
    const handleClick=()=>{
        localStorage.removeItem('token')
        navi('/')
    }
  return (
    <div className='logout'>
    <h1>Hii, Nishtha</h1> 
      <button className='log' onClick={handleClick}>Logout</button>
    </div>
  )
}

export default Logout
