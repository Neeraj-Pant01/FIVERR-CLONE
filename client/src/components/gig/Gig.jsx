import { AiFillHeart, AiFillStar } from "react-icons/ai"
import "./gig.scss"
import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { useSelector } from "react-redux"
import makeApiRequest from "../../utils/newRequest"

const Gig = ({ gig }) => {

  const token = useSelector((user) => user.user.currentUser)
  const api = makeApiRequest(token)

  const { isLoading, error, data } = useQuery({
    queryKey: [`${gig.userId}`],
    queryFn: () =>
      api.get(`/auth/${gig.userId}`).then((respone) => {
        return respone.data
      })
  })


  return (
    <Link to={`/gig/${gig._id}`}>
      <div className="Gig">
        <div className="gig-top">
          <img src={gig.cover} alt="" />
        </div>
        <div className="gig-bottom">
          {isLoading ? "Loading" : error ? "something went wrong" :
            <div className="name">
              <img src={data.img || "https://cdn-icons-png.flaticon.com/512/147/147142.png"} alt="" />
              <b>{data.userName}</b>
            </div>}
          <div className="desc">
            {gig.desc}
          </div>
          <div className="got-stars">
            {
              Array.from({ length: (Math.round(gig.totalStars / gig.starNumber)) }).map((star,i) => <AiFillStar key={i} />
              )
            }
            <span>{!isNaN((gig.totalStars / gig.starNumber)) &&
              Math.round(gig.totalStars / gig.starNumber)}</span>
          </div>
          <div className="ratings">
            <AiFillHeart className="heart" />
            <div className="price-details">
              <span>STARTING AT</span>
              <b>$ {gig.price}</b>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Gig
