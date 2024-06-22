import React, { useEffect } from 'react'
import {useParams} from "react-router-dom"
const RoomComponent = () => {
    const {id}= useParams()
    useEffect(()=>{

    },[])
  return (
    <div>RoomComponent</div>
  )
}

export default RoomComponent