import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
const SigUpComponent = () => {

    const [user,setUser]=useState({
        uname:"",
        uemail:"",
        ucontact:"",
        uaddress:"",
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

    const handleSubmit=(event)=>{
        event.preventDefault()


        navigate("/login")
    }



  return (
    <div>
        <form onSubmit={handleSubmit}>
    <label for="uname">User Name</label>
    <input name="uname" type='text' value={user.uname} onChange={handleChange}/>
    <label for="uemail">User Email</label>
    <input name="uemail" type='text' value={user.uemail} onChange={handleChange}/>
    <label for="ucontact">User Name</label>
    <input name="ucontact" type='text' value={user.ucontact} onChange={handleChange}/>
    <label for="uaddress">User Name</label>
    <input name="uaddress" type='text' value={user.uaddress} onChange={handleChange}/>
    <label for="upass">User Password</label>
    <input name="upass" type='text' value={user.upass} onChange={handleChange}/>
    <input type='submit' value={"create Account"} disabled={!(user.uname!=="" && user.upass!=="" && user.ucontact!=="" && user.uemail!=="" && user.uaddress!=="")}/>
    </form>



    </div>
  )
}

export default SigUpComponent