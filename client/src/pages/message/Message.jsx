import { Link } from 'react-router-dom'
import './message.scss'

const Message = () => {
  return (
    <div className='Message'>
      <span className='breadcrums'><Link to={`/messeges`}>Messeges</Link>{"> John Doe >"}</span>

      <div className="messages">
        <div className="item">
        <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quas alias rerum magni incidunt hic qui expedita sit cum, adipisci fugiat libero delectus cupiditate doloribus non eaque cumque aspernatur ad natus dolorem officia! Laboriosam illum beatae itaque eius sint incidunt?</p>
        </div>

        <div className="item owner">
        <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quas alias rerum magni incidunt hic qui expedita sit cum, adipisci fugiat libero delectus cupiditate doloribus non eaque cumque aspernatur ad natus dolorem officia! Laboriosam illum beatae itaque eius sint incidunt?</p>
        </div>

        <div className="item owner">
        <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quas alias rerum magni incidunt hic qui expedita sit cum, adipisci fugiat libero delectus cupiditate doloribus non eaque cumque aspernatur ad natus dolorem officia! Laboriosam illum beatae itaque eius sint incidunt?</p>
        </div>

        <div className="item">
        <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quas alias rerum magni incidunt hic qui expedita sit cum, adipisci fugiat libero delectus cupiditate doloribus non eaque cumque aspernatur ad natus dolorem officia! Laboriosam illum beatae itaque eius sint incidunt?</p>
        </div>

        <div className="item">
        <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
      </div>
      <hr />
      <div className="write">
        <div className="main">
          <textarea></textarea>
          <button>send</button>
        </div>
      </div>
    </div>
  )
}

export default Message
