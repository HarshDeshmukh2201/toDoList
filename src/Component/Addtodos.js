
import React, { useState } from 'react';
export default function Addtodos({Additeam}) {
  const[describtion ,setDescribtion] = useState("") 
  const[ status ,setStatus] = useState("")
    const submit =(e)=>{
        e.preventDefault()
        if(!describtion || !status){
            alert("one of block is blank")
          
        }else{Additeam(describtion,status)
          setDescribtion("");
          setStatus("");}
        
    }
  return (
    <form onSubmit={submit} className="mb-3 container my-3">
  <div className="mb-3 ">
    <label >
    describtion
        </label>
    <input
      type="text"
      className="form-control"
     
      onChange={(e)=>{setDescribtion(e.target.value)

      }}
      value={describtion}
 
    />
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
    status 
    </label>
    <input
      type="text"
      className="form-control"
     
      value={status}
      onChange={(e)=>{setStatus(e.target.value)

      }}
    />
  </div>
  
  <button type="submit" className="btn btn-danger">
   Add
  </button>
</form>

  )
}
