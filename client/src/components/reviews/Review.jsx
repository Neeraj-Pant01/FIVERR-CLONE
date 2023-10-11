import { AiFillDislike, AiFillLike, AiFillStar, AiOutlineFlag } from 'react-icons/ai'
import './reviews.scss'
import { useSelector } from 'react-redux'
import makeApiRequest from '../../utils/newRequest'
import { useQuery } from '@tanstack/react-query'

const Review = ({r}) => {
  const token = useSelector((user)=>user.user.currentUser)
  const api = makeApiRequest(token)

  const { isLoading:userLoading, error:userError, data:userData,} = useQuery({

    queryKey: [`auth/${r.userId}`],
    queryFn: () =>
    api.get(`/auth/${r.userId}`).then((respone)=>{
      return respone.data
    })
  })


  return (
    <div className='review'>
      {
        userLoading ? "Loading..." : userError ? "something went wrong" : 
        <div className="review-top">
        <img src='https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' />
        <div className="r-user-info">
            <b>{userData.userName}</b>
            <p><AiOutlineFlag style={{color:"red"}}/>{userData.country}</p>
        </div>
      </div>
      }
      <div className="stars">
        {Array(r.star).fill().map((s,i)=><AiFillStar style={{color:"goldenrod"}} key={i}/>)}
      </div>

      <p>
        {r.desc}
      </p>

      <div className="helpfull-links">
        <b>Helpfull ?</b>
        <b><AiFillLike /> yes</b>
        <b><AiFillDislike /> No</b>
      </div>
    </div>
  )
}

export default Review
