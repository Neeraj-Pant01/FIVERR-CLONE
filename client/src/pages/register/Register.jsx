import React, { useState } from 'react'
import "./register.scss"
import axios from "axios"

const Register = () => {
  const [file, setFile] = useState(undefined)

  const filledSUer = {
    userName:'prefilled',
    email:'prefilled',
    password:'prefilled',
    country:'prefilled',
    phone:'prefilled',
    desc:'prefilled',
  }


  const [info, setInfo] = useState({
    userName:`${filledSUer.userName}`,
    email:`${filledSUer.email}`,
    password:`${filledSUer.password}`,
    country:`${filledSUer.country}`,
    phone:`${filledSUer.phone}`,
    desc:`${filledSUer.desc}`,
    // img: file
  })

  const handleSubmit = async (e) =>{
    info.img = file.name;
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:9000/api/v1/auth/register',info)
      console.log(response)
    }catch(err){
      console.log(err)
    }
  }

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setInfo((pre)=>{
      return {...pre, [name]:value}
    })
  }
  return (
    <div className='Register'>
      <div className="p-img">
      <img src={file ? URL.createObjectURL(file) : "./assets/react.svg"} />
      <label htmlFor='id'>
      <span>slect</span>
      </label>
      </div>
      <input id="id" type='file' onChange={(e)=>setFile(e.target.files[0])} style={{display:"none"}}/>
      <form onSubmit={handleSubmit}>
      <input type='text' value={info.userName} name='userName' onChange={handleChange}></input>
      <input type='text' name='email' onChange={handleChange}></input>
      <input type='text' name='password' onChange={handleChange}></input>
      <input type='text' value={info.country} name='country' onChange={handleChange}></input>
      <input type='text' name='phone' onChange={handleChange}></input>
      <input type='text' name='desc' onChange={handleChange}></input>
      <button>register</button>
      </form>
    </div>
  )
}

export default Register
