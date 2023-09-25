import { Link } from 'react-router-dom'
import './mygigs.scss'
import { AiOutlineDelete } from "react-icons/ai"

const Mygigs = () => {
  const currentUser = {
    name:"user",
    isSeller:true,
    // isSeller:false
  }
  return (
    <div className='mygigs'>
      <div className="title">
        <h1>{currentUser.isSeller ? "Gigs" : "Orders"}</h1>
        {
          currentUser.isSeller && 
          (
            <Link to={`/add`}>
              <button>Add New Gig</button>
            </Link>
          )
        }
      </div>
      <table>
        <tr>
        <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
        </tr>
        <tr>
          <td>
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          </td>
          <td>Stunning Concept Art</td>
          <td>59.<sup>99</sup></td>
          <td>13</td>
          <td><AiOutlineDelete style={{color:"tomato",cursor:"pointer",fontSize:"24px"}}/></td>
        </tr>

        <tr>
          <td>
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          </td>
          <td>Stunning Concept Art</td>
          <td>59.<sup>99</sup></td>
          <td>13</td>
          <td><AiOutlineDelete style={{color:"tomato",cursor:"pointer",fontSize:"24px"}}/></td>
        </tr>

        <tr>
          <td>
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          </td>
          <td>Stunning Concept Art</td>
          <td>59.<sup>99</sup></td>
          <td>13</td>
          <td><AiOutlineDelete style={{color:"tomato",cursor:"pointer",fontSize:"24px"}}/></td>
        </tr>

        <tr>
          <td>
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          </td>
          <td>Stunning Concept Art</td>
          <td>59.<sup>99</sup></td>
          <td>13</td>
          <td><AiOutlineDelete style={{color:"tomato",cursor:"pointer",fontSize:"24px"}}/></td>
        </tr>

        <tr>
          <td>
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          </td>
          <td>Stunning Concept Art</td>
          <td>59.<sup>99</sup></td>
          <td>13</td>
          <td><AiOutlineDelete style={{color:"tomato",cursor:"pointer",fontSize:"24px"}}/></td>
        </tr>

        <tr>
          <td>
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          </td>
          <td>Stunning Concept Art</td>
          <td>59.<sup>99</sup></td>
          <td>13</td>
          <td><AiOutlineDelete style={{color:"tomato",cursor:"pointer",fontSize:"24px"}}/></td>
        </tr>
      </table>
    </div>
  )
}

export default Mygigs
