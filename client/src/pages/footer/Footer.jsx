import { AiFillDollarCircle, AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiOutlineGlobal, AiOutlineStar } from 'react-icons/ai'
import './footer.scss'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="top">
        <div className="items">
        <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
        </div>

        <div className="items">
        <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
        </div>

        <div className="items">
        <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
        </div>

        <div className="items">
        <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
        </div>
        </div>
        <hr />
        <div className="bottom">
            <div className="bottom-left">
                <h2>Fiverr</h2>
                <span>&copy; Liverr International Ltd. 2023</span>
            </div>
            <div className="bottom-right">
                <div style={{display:"flex",alignItems:"center",gap:"5px", fontSize:"24px",color:"darkgray"}}>
                <AiFillInstagram />
                <AiFillFacebook />
                <AiFillLinkedin />
                <AiFillTwitterSquare />
                </div>
                <div className="lang">
                    <AiOutlineGlobal style={{fontSize:"24px",color:"darkgray"}} />
                    <span>English</span>
                </div>
                <div className="usd">
                    <AiFillDollarCircle style={{fontSize:"24px",color:"darkgray"}}/>
                    <span>usd</span>
                </div>

                <AiOutlineStar style={{fontSize:"24px",color:"darkgray"}}/>
            </div>
        </div>
    </div>
  )
}

export default Footer
