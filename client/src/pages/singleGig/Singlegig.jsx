import { Slider } from 'infinite-react-carousel'
import ImgSlider from '../../components/slider/ImgSlider'
import './singlegig.scss'
import { AiFillClockCircle, AiFillStar, AiOutlineCheck, AiOutlineSync } from "react-icons/ai"

const Singlegig = () => {
  return (
    <div className='singlegig'>
      <div className="left-side">
        <h1>I will create ai generated art for you</h1>
        <div className="got-stars">
          <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <b>Anna Bell</b>
          <div className='stars'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
        <div className="gig-slider">
          <Slider className="gig-img-slide" slidesToShow={1} arrowsScroll={1}>
          <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>
        </div>
        <div className="about-gig">
        <h2>About the gig</h2>
        <p>            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message.</p>
        </div>
        <div className="about-seller">
          <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />

          <div className="user-info">
            <b>Anna Bell</b>
            <div className='stars'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div className="button">CONTACT ME</div>
          </div>
        </div>

        <div className="user-add-info">
          <div className="top">
            <div className="item">
              <span>from</span>
              <b>usa</b>
            </div>

            <div className="item">
              <span>Member since</span>
              <b>Aug 2022</b>
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
          My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="top">
          <h3>Ai generated image</h3>
          <span>$ 59.99</span>
          </div>
          <p>I will create a unique high quality AI generated image based on a
            description that you give me</p>
            <div className="time">
              <div className="d-time">
                <AiFillClockCircle />
                 <b>2 days delivery</b>
              </div>
              <div className="revisions">
                <AiOutlineSync />
                <b>2 Revisions</b>
              </div>
            </div>

              <div className="checks">
                <li><AiOutlineCheck style={{color:"green"}}/> Prompt Wriring</li>
                <li><AiOutlineCheck style={{color:"green"}}/> Artwork delivery</li>
                <li><AiOutlineCheck style={{color:"green"}}/> Image Upscaling</li>
                <li><AiOutlineCheck style={{color:"green"}}/> Additional Design</li>

              </div>

              <button>continue</button>
      </div>
    </div>
  )
}

export default Singlegig
