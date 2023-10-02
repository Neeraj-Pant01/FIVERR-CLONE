import { useState } from 'react'
import './login.scss'
import axios from 'axios'
import {useDispatch, useSelector} from "react-redux"
import { login } from '../../redux/userSlice'

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({
        email:"",
        password:""
    })

    const dispatch = useDispatch()

    const handleLogin = async (e) =>{
      e.preventDefault();
      try{
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URI}/auth/login`,loginInfo)
        dispatch(login(response.data))
      }catch(err){
        console.log(err)
      }
    }


  return (
    <div className='Login'>
      <form>
        <input type='email' placeholder='email' onChange={(e)=>loginInfo.email=e.target.value}/>
        <input type='password' placeholder='enter password' onChange={(e)=>loginInfo.password=e.target.value}/>
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  )
}

export default Login
