import { Link } from 'react-router-dom'
import './message.scss'
import { useSelector } from 'react-redux'
import makeApiRequest from '../../utils/newRequest'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const Messeges = () => {
  const token =useSelector((user)=>user.user.currentUser.accesstoken)
  const currentUser =useSelector((user)=>user.user.currentUser)
  const api = makeApiRequest(token)
  const queryClient = useQueryClient()

      const { isLoading, error, data,} = useQuery({
        queryKey: [`conversations`],
        queryFn: () =>
        api.get(`/conversations`).then((respone)=>{
          return respone.data
        })
      })

      const mutation = useMutation({
        mutationFn: (id) => {
          return api.put(`/conversations/${id}`);
        },
        onSuccess:()=>{
          queryClient.invalidateQueries([`conversations`])
        }
      });

      const handleRead = (id) =>{
        mutation.mutate(id)
      }

  return (
    <div className='Messages'>
      <div className="title">
        <h1>Messages</h1>
      </div>
      <table>
        <tr>
            <th>{currentUser.isSeller ? "Buyer" : "Seleler"}</th>
            <th>Last Messege</th>
            <th>Date</th>
            <th>Action</th>
        </tr>
        {
          isLoading ? "Loading..." : error ? "Something went wrong !" : data.map((c)=>{
            return (
              <tr className={((currentUser.isSeller && !c.readBYSeller) || (!currentUser.isSeller && !c.readBYBuyer)) ? 'active' : ''} key={c._id}>
              <td>{currentUser.isSeller ? c.buyerId : c.sellerId}</td>
              <td><Link className='m' to={`/message/${c.id}`}>{c?.lastMessage?.substring(0,70) || "..."}...</Link></td>
              <td>{new Date(c.createdAt).toLocaleDateString()}</td>
              <td>
                  {((currentUser.isSeller && !c.readBYSeller) ||
                    (!currentUser.isSeller && !c.readBYBuyer)) && (
                    <button onClick={() => handleRead(c.id)}>
                      Mark as Read
                    </button>
                  )}
                </td>
          </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default Messeges
