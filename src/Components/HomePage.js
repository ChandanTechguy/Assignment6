import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Homepage() {
    const navigate = useNavigate()
  return (
    <>
    <div className='App'>
        <h1 style={{color:"darkGray", backgroundColor:"black"}}>Create Your Blog</h1>
        <button style={{color:"blue"}} onClick={()=>{navigate('/createBlog')}} >Start</button>
        
        <div>
        <br/>
        <br/>
        <img  style={{ width:"300px", height:"300px" }} src={localStorage.getItem("url")} alt={localStorage.getItem("title")} />
        <br/>
       <h1> {localStorage.getItem("title")}</h1>
       <button onClick={()=>{navigate('/blogDetails')}} >More Details</button>
       </div>
    </div>
      
    </>
  )
}