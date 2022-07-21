import React from 'react'

export default function BlogDetails() {
    const removeData = ()=>{
        localStorage.clear("title")
        localStorage.clear("description")
        localStorage.clear("url")
    }
  return (
    <>
    <div className='App'>
    <img  style={{ width:"300px", height:"300px", paddingTop:"20px" }} src={localStorage.getItem("url")} alt={localStorage.getItem("title")} />
        <br/>
       <h1> {localStorage.getItem("title")}</h1>
       <br/>
       <p>{localStorage.getItem("description")}</p>
       <button onClick={removeData} >Delete</button> <button>Edit</button>
    </div>
      
    </>
  )
}