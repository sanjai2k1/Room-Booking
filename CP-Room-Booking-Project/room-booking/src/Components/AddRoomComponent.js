import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import DataBaseService from '../Service/DataBaseService';

const AddRoomComponent = () => {


    const [room,setRoom]=useState({
        
    })


    useEffect(()=>{
    },[])
    const navigate = useNavigate()
    const handleChange =(event)=>{
        const {name,value}=event.target
        setRoom((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    const handleSubmit=(event)=>{
        event.preventDefault()


        navigate("/maindashboard")
    }
  return (
    <div>
        <h1>Add Room Component</h1>
        <form>

            


        </form>



    </div>
  )
}

export default AddRoomComponent