import React, { useState } from 'react'
import "./register.scss"
import axios from "axios"

const Register = () => {
  const [file, setFile] = useState(undefined)
  const [url, setUrl] = useState()

  const filledSUer = {
    userName: 'prefilled',
    email: 'prefilled',
    password: 'prefilled',
    country: 'prefilled',
    phone: 'prefilled',
    desc: 'prefilled',
  }


  const [info, setInfo] = useState({
    userName: `${filledSUer.userName}`,
    email: `${filledSUer.email}`,
    password: `${filledSUer.password}`,
    country: `${filledSUer.country}`,
    phone: `${filledSUer.phone}`,
    desc: `${filledSUer.desc}`,
  })

  const upload = async (e) => {
    const uploadFile = e.target.files[0];
    setFile(uploadFile)
    const data = new FormData()
    data.append('file', uploadFile)
    data.append('upload_preset', "fiverr")
    try {
      const response = await axios.post("https://api.cloudinary.com/v1_1/dbsgzqpvc/image/upload", data)
      setUrl(response.data.secure_url)
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    info.img = url;
    console.log(info)
    try {
      const response = await axios.post('http://localhost:9000/api/v1/auth/register', info)
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((pre) => {
      return { ...pre, [name]: value }
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

      <input id="id" type='file' onChange={upload} style={{ display: "none" }} />

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
