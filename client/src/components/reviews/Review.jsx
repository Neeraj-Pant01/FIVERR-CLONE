import { AiFillDislike, AiFillLike, AiFillStar, AiOutlineFlag } from 'react-icons/ai'
import './reviews.scss'

const Review = () => {
  return (
    <div className='review'>
      <div className="review-top">
        <img src='https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' />
        <div className="r-user-info">
            <b>john doe</b>
            <p><AiOutlineFlag /> united states</p>
        </div>
      </div>
      <div className="stars">
        <AiFillStar style={{color:"goldenrod"}} />
        <AiFillStar style={{color:"goldenrod"}}/>
        <AiFillStar style={{color:"goldenrod"}}/>
        <AiFillStar style={{color:"goldenrod"}}/>
        <AiFillStar style={{color:"goldenrod"}}/>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ad maiores temporibus minima id atque explicabo sunt soluta voluptatibus? Voluptatem.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sint?
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
