import React, { useEffect } from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import makeApiRequest from '../../utils/newRequest'
import { useSelector } from 'react-redux'

const Sucess = () => {
    const {search} = useLocation()
    const navigate = useNavigate()
    const params = new URLSearchParams(search)
    const payment_intent = params.get('payment_intent')
  const token =useSelector((user)=>user.user.currentUser.accesstoken)

    const api = makeApiRequest(token)

    useEffect(()=>{
        const makeRequest = async () =>{
            try{
                await api.put('/orders',{payment_intent})
                setTimeout(() => {
                    navigate('/orders')
                }, 5000);
            }catch(err){
                console.log(err)
            }
        }
        makeRequest();
    },[])

  return (
    <div>
        payment Sucsessfull
        <h2>You are being redirected to orders page... please do not close the tab !</h2>
    </div>
  )
}

export default Sucess
