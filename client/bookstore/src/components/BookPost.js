import axios from 'axios'
import React, { useState } from 'react'

function BookPost() {
  const [i,seti]=useState({
    title: '',
    description:'' 
  })
  const handleclick=(e)=>{
    e.preventDefault()
    console.log(i)

    const newBook={
      title:i.title,
      description:i.description
    }
    axios.post('/api/create',newBook)
  }
  const handlesub=(e)=>{
const {name,value}=e.target
seti(previnput=>{
  return {
    ...previnput,
    [name]:value
  }
})
  }
  return (
    <div className='container'>
    
        <form>
  <div className='form-group'>
    <input onChange={handlesub} value={i.title} name ="title" className='form-control'></input>
  </div>
  <br></br>
  <div className='form-group'>
    <textarea  onChange={handlesub}name='description' value={i.description} className='form-control'/>
  </div>
  <button onClick={handleclick} type="submit" className="btn btn-success">Add Book</button>
</form>
    </div>
  )
}

export default BookPost