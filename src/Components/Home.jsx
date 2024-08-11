import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
const Home = () => {
  const[name,setName]=useState('')
  const[lists,setLists]=useState([])
  
  const HandlSubmit=()=>{
    setLists((lists)=>{
      const updatelist=[...lists,name]
      console.log(updatelist)
      setName('')
      return updatelist
      
    })
    
  }
const HandlRemove=(i)=>{
  const updatedlistData=lists.filter((elem,id)=>{
    return i!=id;
    
  })
  setLists(updatedlistData)
}

  return (
    <>
      <div className="container">
        
        <h1>TODO LIST</h1>
    
        <div className="input">
            <input type="text" placeholder='Enter your list' value={name}
            onChange={(e)=>setName(e.target.value)} />
            <button onClick={HandlSubmit}>ADD</button>
        </div>
              <h1 style={{marginTop:'10px'}}>Here is Your List!!</h1>
        <div className="list-container">
          
        {lists!=[] &&
          lists.map((list,i)=>{
               return <div className="list">
                <p key={i}>{list}</p>
                <MdDelete onClick={()=>HandlRemove(i)} />
               </div>

          })
      
        }
       
        </div>
       
      </div>
     
    </>
  )
}

export default Home
