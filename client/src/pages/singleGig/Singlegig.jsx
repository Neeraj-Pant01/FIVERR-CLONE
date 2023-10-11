import { Slider } from 'infinite-react-carousel'
import './singlegig.scss'
import { AiFillClockCircle, AiFillStar, AiOutlineCheck, AiOutlineStar, AiOutlineSync } from "react-icons/ai"
import Review from '../../components/reviews/Review'
import { useSelector } from 'react-redux'
import makeApiRequest from '../../utils/newRequest'
import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import { useRef, useState } from 'react'

const Singlegig = () => {

  const queryClient = useQueryClient()

  const token =useSelector((user)=>user.user.currentUser.accesstoken)
  const currentUser =useSelector((user)=>user.user.currentUser)
  const api = makeApiRequest(token)
  const reviewRef = useRef()
  const [allStars, setAllStars] = useState([1,2,3,4,5])
  const [selectedIndex, setSelectedIndex] = useState(null)

  const {id} = useParams()

  const { isLoading, error, data,} = useQuery({
    queryKey: [`gig/${id}`],
    queryFn: () =>
    id && api.get(`/gigs/${id}`).then((respone)=>{
      return respone.data
    })
  })

  const { isLoading:isLoadingUser, error:isUserError, data:isUserData } = useQuery({
    queryKey: [`user/${data?.userId}`],
    queryFn: () =>
      data?.userId && api.get(`/auth/${data?.userId}`).then((respone) => {
        return respone.data
      })
  })

  const { isLoading:reviewLoading, error:reviewError, data:reviewData} = useQuery({
    queryKey: [`review/${id}`],
    queryFn: () =>
    id && api.get(`/reviews/${id}`).then((respone)=>{
      return respone.data
    })
  })

  const mutation = useMutation({
    mutationFn: (review) => {
      return api.post("/reviews", review);
    },
    onSuccess:()=>{
      queryClient.invalidateQueries([`review/${id}`])
    }
  });

  const sendReview = () =>{
    mutation.mutate({userId:currentUser._id, gigId:id, desc:reviewRef.current.value, star:selectedIndex+1})
    reviewRef.current.value =""
    setSelectedIndex(null)
  }

  const rateStars = (i) =>{
    setSelectedIndex(i)
  }

  return (
    <>
   {
    isLoading ? "Loading" : error ? "something went wrong" :
   <div className='singlegig'>
      <div className="left-side">
        <h1>{data.title}</h1>
        <div className="got-stars">
          <img src={isUserData?.img || "https://cdn-icons-png.flaticon.com/512/147/147142.png"} alt="" />
        { isLoading ? "Loading" : error ? "error occured" : <b>{isUserData?.userName}</b>}
          { !isNaN(data.totalStars / data.starNumber) &&
            <div className='stars'>
              {
                Array(Math.round(data.totalStars / data.starNumber)).fill().map((item,i)=><AiFillStar key={i}/>)
              }
          </div>
          }
        </div>
        <div className="gig-slider">
          <Slider className="gig-img-slide" slidesToShow={1} arrowsScroll={1}>
            {
              data.images.map((image)=><img src={image} key={image}/>)
            }
          </Slider>
        </div>
        <div className="about-gig">
        <h2>About the gig</h2>
        <p>{data.desc}.</p>
        </div>

        {isLoadingUser ? "Loading" : isUserError ? "something went wrong" :
        <>
        <div className="about-seller">
          <img src={isUserData.img || "https://cdn-icons-png.flaticon.com/512/147/147142.png"} />

                      <div className="user-info">
                      <b>{isUserData?.userName}</b>
                    { !isNaN(data.totalStars / data.starNumber) &&
                      <div className='stars'>
                        {
                          Array(Math.round(data.totalStars / data.starNumber)).fill().map((item,i)=><AiFillStar key={i}/>)
                        }
                    </div>
                    }
                    <div className="button">CONTACT ME</div>
                    </div>

        </div>

        <div className="user-add-info">
          <div className="top">
            <div className="item">
              <span>from</span>
              <b>{isUserData.country}</b>
            </div>

            <div className="item">
              <span>Member since</span>
              <b>{new Date(isUserData.createdAt).toLocaleDateString()}</b>
            </div>

            <div className="item">
              <span>Avg. response time</span>
              <b>4 hours</b>
            </div>

            <div className="item">
              <span>Last delivery</span>
              <b>1 day</b>
            </div>

            <div className="item">
              <span>Languages</span>
              <b>English</b>
            </div>
          </div>
          <hr />
          <div className="bottom">
            {
              isUserData?.desc
            }
          </div>
        </div>
        </>
}

        <div className="reviews">
      <h2>Reviews {`(${reviewData?.length})`}</h2>
      <div className="addReview">
        <h2>Add Review</h2>
        <textarea name="desc" cols="30" rows="10" ref={reviewRef}></textarea>
        <div className="r-stars">
        {
          allStars.map((e,i)=>
          <AiFillStar onClick={()=>rateStars(i)} className={i <= selectedIndex ? 'R-bg': 'r-bg'}/>)
        }
        </div>
        <button className='add' onClick={sendReview}>Add Review</button>
      </div>
      {
        reviewLoading ? "loading..." : reviewError ? "something went wrong !" : reviewData.map((r)=>
        <Review id={r._id} r={r}/>
        )
      }
    </div>

      </div>
      <div className="right-side">
        <div className="top">
          <h3>Ai generated image</h3>
          <span>$ {data?.price}</span>
          </div>
          <p>{data?.shortDesc}</p>
            <div className="time">
              <div className="d-time">
                <AiFillClockCircle />
                 <b>{data?.deliveryTime} days delivery</b>
              </div>
              <div className="revisions">
                <AiOutlineSync />
                <b>{data.revisionNumber}</b>
              </div>
            </div>

              <div className="checks">
                {
                  data.features.map((f)=>
                  <li key={f}><AiOutlineCheck style={{color:"green"}}/> {f}</li>
                  )
                }

              </div>
              {
                <Link to={`/pay/${id}`} className='link'>
              <button>continue</button>
                </Link>
              }
      </div>
    </div>
}
      </>
  )
}

export default Singlegig
