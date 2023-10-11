import { Link, useParams } from 'react-router-dom'
import './message.scss'
import { useSelector } from 'react-redux'
import makeApiRequest from '../../utils/newRequest'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRef } from 'react'

const Message = () => {

  const {id} = useParams()
  const desc = useRef()
  const queryClient = useQueryClient()

  const token =useSelector((user)=>user.user.currentUser.accesstoken)
  const currentUser =useSelector((user)=>user.user.currentUser)
  const api = makeApiRequest(token)

  const { isLoading, error, data,} = useQuery({
    queryKey: [`messeges`],
    queryFn: () =>
    api.get(`/messeges/${id}`).then((respone)=>{
      return respone.data
    })
  })

  const mutation = useMutation({
    mutationFn: (message) => {
      return api.post(`/messeges`,message);
    },
    onSuccess:()=>{
      queryClient.invalidateQueries([`messeges`])
    }
  });

  const sendMessege = () =>{
    mutation.mutate({
      conversationId:id,
      userId: currentUser._id,
      desc: desc.current.value
    })
    desc.current.value = ""
  }


  return (
    <div className='Message'>
      <span className='breadcrums'><Link to={`/messeges`}>Messeges</Link>{"> John Doe >"}</span>
      <div className="messages">
        {
          isLoading ? "Loading" : error ? "something went wrong !" : data.map((m)=>{
            return (
              <div className={currentUser._id === m.userId ? 'item owner' : "item"} key={m._id}>
              <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <p>{m.desc}</p>
              </div>
            )
          })
        }
        
      </div>
      <hr />
      <div className="write">
        <div className="main">
          <textarea ref={desc}></textarea>
          <button onClick={sendMessege}>send</button>
        </div>
      </div>
    </div>
  )
}

export default Message
