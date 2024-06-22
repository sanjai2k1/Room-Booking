import React from 'react'
import {useNavigate} from "react-router-dom"

const HeaderComponent = () => {
    const navigate = useNavigate()
    const handleClick =(event)=>{
      
        navigate("/login")
    }



  return (
    <div>

        <h1>header Component</h1>
        <button onClick={handleClick}>LogOut</button>
    </div>
  )
}

export default HeaderComponent