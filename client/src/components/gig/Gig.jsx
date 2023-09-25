import { AiFillHeart, AiFillStar } from "react-icons/ai"
import "./gig.scss"
import { Link } from "react-router-dom"

const Gig = ({gig}) => {
  return (
    <Link to={`/gig/${gig.id}`}>
        <div className="Gig">
      <div className="gig-top">
        <img src={gig.img} alt="" />
      </div>
      <div className="gig-bottom">
        <div className="name">
            <img src={gig.pp} alt="" />
            <b>{gig.username}</b>
        </div>
        <div className="desc">
            {gig.desc}
        </div>
      <div className="got-stars">
        {
            Array.from({length:gig.star}).map((star)=><AiFillStar key={star} />
            )
        }
        <span>{gig.star}</span>
      </div>
      <div className="ratings">
        <AiFillHeart className="heart"/>
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
