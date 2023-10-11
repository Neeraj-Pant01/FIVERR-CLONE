import { AiOutlineMessage } from "react-icons/ai"
import "./orders.scss"
import { useQuery } from "@tanstack/react-query"
import makeApiRequest from "../../utils/newRequest"
import { useSelector } from "react-redux"
import { Link, UNSAFE_NavigationContext, useNavigate } from "react-router-dom"
import axios from "axios"

const Orders = () => {

  const currentUser =useSelector((user)=>user.user.currentUser)
  const token = useSelector((user)=>user.user.currentUser.accesstoken)
  const api = makeApiRequest(token)

  const navigate = useNavigate();


  const { isLoading, error, data,} = useQuery({
    queryKey: [`orders`],
    queryFn: () =>
    api.get(`/orders`).then((respone)=>{
      return respone.data
    })
  })

  const handleContact = async (order) =>{
    const buyerId = order.buyerId;
    const sellerId = order.sellerId;
    const id = sellerId + buyerId;
    try{
      const response = await api.get(`/conversations/single/${id}`)
      navigate(`/message/${response.data.id}`)
    }catch(err){
      if(err.response.status === 404){
        const res = await api.post(`/conversations`,{to: currentUser.isSeller ? buyerId : sellerId})

        navigate(`/message/${res.data.id}`)
      }
    }
  }


  return (
    <div className='orders'>
      <div className="title">
        <h1>Orders</h1>
      </div>
      <table>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
        </tr>
       {
        isLoading ? "Loading..." : error ? "somethingwent wrong" :
        data.map((order)=>{
          return (
            <tr key={order._id}>
            <td>
                  <img
                    src={order.image} alt={order.image}
                  />
                </td>
                <td>{order.title}</td>
                <td>{order.price}.<sup>99</sup></td>
                <td>{order.buyerId}</td>
                <td><AiOutlineMessage style={{color:"lightblue",cursor:"pointer",fontSize:"24px"}} onClick={()=>handleContact(order)}/></td>
            </tr>
          )
        })
       }
      </table>
    </div>
  )
}

export default Orders
