import { Link } from 'react-router-dom'
import './gigcard.scss'

const Gigcard = ({card}) => {
  return (
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
  )
}

export default Gigcard
