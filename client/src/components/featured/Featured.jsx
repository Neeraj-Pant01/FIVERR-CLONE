import "./featured.scss"
import {AiOutlineSearch} from "react-icons/ai"

const Featured = () => {
  return (
    <div className="Featured">
      <div className="left">
        <h1>FIND THE PERFECT <i>FREELANCE &nbsp;</i> SERVICES <br></br>FOR YOUR BUSINESS</h1>
        <div className="search">
            <div className="searchbar">
                < AiOutlineSearch style={{marginLeft:"20px"}}/>
                <input type="text" placeholder="try building mobile app" />
            </div>
            <button>Search</button>
        </div>
        <div className="popular">
            <p>Popular:</p>
            <span>Web Design</span>
            <span>WordPress</span>
            <span>Logo Design</span>
            <span>Ai Services</span>
        </div>
      </div>
      <div className="RIGHT">
      <img src="https://www.pngmart.com/files/22/Celebrity-PNG-Image.png" alt="" />
      </div>
    </div>
  )
}

export default Featured
