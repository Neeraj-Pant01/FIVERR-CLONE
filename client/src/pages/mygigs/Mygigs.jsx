import { Link } from 'react-router-dom'
import './mygigs.scss'
import { AiOutlineDelete } from "react-icons/ai"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import makeApiRequest from '../../utils/newRequest'
import { useSelector } from 'react-redux'

const Mygigs = () => {
  const queryClient = useQueryClient()
  const token =useSelector((user)=>user.user.currentUser.accesstoken)
  const currentUser =useSelector((user)=>user.user.currentUser)

  const api = makeApiRequest(token);

  const { isLoading, error, data} = useQuery({
    queryKey: [`mygigs`],
    queryFn: () =>
    api.get(`/gigs?userId=${currentUser._id}`).then((respone)=>{
      return respone.data
    })
  })

  const mutation = useMutation({
    mutationFn: (id) => {
      return api.delete(`/gigs/${id}`);
    },
    onSuccess:()=>{
      queryClient.invalidateQueries([`mygigs`])
    }
  });

  const handleDelete = (id) =>{
    mutation.mutate(id)
  }

  return (
    <div className='mygigs'>
      <div className="title">
        <h1>{currentUser.isSeller ? "Gigs" : "Orders"}</h1>
        {
          currentUser.isSeller && 
          (
            <Link to={`/add`}>
              <button>Add New Gig</button>
            </Link>
          )
        }
      </div>
      <table>
        <tr>
        <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
        </tr>
        {
          isLoading ? "loading..." : error ? "something went wrong" : data.map((g)=>{
            return (
              <tr key={g._id}>
              <td>
                <img src={g.cover} />
              </td>
              <td>{g.title}</td>
              <td>{g.price}.<sup>99</sup></td>
              <td>{g.sales}</td>
              <td><AiOutlineDelete style={{color:"tomato",cursor:"pointer",fontSize:"24px"}} onClick={()=>handleDelete(g._id)}/></td>
            </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default Mygigs
