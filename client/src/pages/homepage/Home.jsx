import './homepage.scss'
import Featured from '../../components/featured/Featured'
import ImgSlider from '../../components/slider/ImgSlider'
import { cards, projects } from '../../data'
import CartCard from '../../components/catcard/CartCard'
import { AiFillCheckCircle } from 'react-icons/ai'
import Gigcard from '../../components/gigcard/Gigcard'

const Home = () => {
  return (
    <div>
      <Featured />
      <div className="trustedBy">
        <span>Trusted by:</span>
        <b>FACEBOOK</b>
        <b>Google</b>
        <b>NETFLIX</b>
        <b>P&G</b>
        <b>PayPal</b>
      </div>
      <ImgSlider slidesToShow={5} arrowsScroll={5}>
      {
        cards.map((card)=><CartCard card={card} key={card}/>)
      }
      </ImgSlider>
      <div className="about">
        <div className="left">
          <h2>A whole world of freelance talent at your fingertips</h2>
          <div className="title">
            <AiFillCheckCircle style={{fontSize:"21px"}}/>
            The best for every budget
          </div>
          <p>Find high-quality services at every price point. No hourly rates,
              just project-based pricing.</p>

          <div className="title">
            <AiFillCheckCircle style={{fontSize:"21px"}}/>
            The best for every budget
          </div>
          <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>

          <div className="title">
            <AiFillCheckCircle style={{fontSize:"21px"}}/>
            The best for every budget
          </div>
          <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>

          <div className="title">
            <AiFillCheckCircle style={{fontSize:"21px"}}/>
            The best for every budget
          </div>
          <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>

        </div>
        <div className="right">
          <video src='/assets/UploadVideo.jsx - YouTube - Visual Studio Code 2023-08-28 22-54-20.mp4' controls />
        </div>
      </div>

      <div className="about bg">
        <div className="left">
          <h2>fiverr business</h2>
          <h2>A business solution designed for teams</h2>
          <p>Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses</p>

          <div className="title">
            <AiFillCheckCircle style={{fontSize:"21px"}}/>
            Connect to freelancers with proven business experience
          </div>

          <div className="title">
            <AiFillCheckCircle style={{fontSize:"21px"}}/>
            Get matched with the perfect talent by a customer success manager
          </div>

          <div className="title">
            <AiFillCheckCircle style={{fontSize:"21px"}}/>
            Manage teamwork and boost productivity with one powerful workspace
          </div>

        </div>
        <div className="right">
          <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png" alt="" />
        </div>
      </div>

      <ImgSlider className="gigslider" slidesToShow={4} arrowsScroll={4}>
        {
          projects.map((card)=><Gigcard key={card.id} card={card}/>)
        }
      </ImgSlider>

    </div>
  )
}

export default Home
