import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {

    const [user,setUser]=useState({
        uname:"",
        upass:""
    })
    const navigate = useNavigate()
    
   
    const handleChange =(event)=>{
        const {name,value}=event.target
        setUser((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    const handleSubmit =(event)=>{
        event.preventDefault()
       

        navigate("/maindashboard")



    }


  return (
    <div>



        <h1>Login Component</h1>
        <form onSubmit={handleSubmit}>
            <label for="uname">User name </label>
            <input type='text' name='uname' value={user.uname} onChange={handleChange}/>
            <label for="upass">User Password </label>
            <input type='text' name='upass' value={user.upass} onChange={handleChange}/>
            <input type='submit' value={"Login"} disabled={!(user.uname!=="" && user.upass!=="")}/>
            <a href='/signup' >I am New User?</a>
        </form>
    </div>
  )
}

export default LoginComponent