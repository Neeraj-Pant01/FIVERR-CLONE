import { Link } from 'react-router-dom'
import './gigcard.scss'

const Gigcard = ({card}) => {
  return (
    <Link to={`/gig/123`}>
    <div className='gigcard'>
      <div className="gigcard-top">
        <img src={card.img} alt="" />
      </div>
      <div className="gigcard-bottom">
        <img src={card.pp} alt="" />
        <div className="desc">
          <span>{card.cat}</span>
          <span>{card.username}</span>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default Gigcard
