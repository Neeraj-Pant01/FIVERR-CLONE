import { AiOutlineDelete } from "react-icons/ai"
import "./orders.scss"

const Orders = () => {

  const currentuser = {
    name:"user",
    isSeller:true
  }

  return (
    <div className='orders'>
      <div className="title">
        <h1>Orders</h1>
      </div>
      <table>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>{currentuser.isSeller ? "Buyer" : "Seller"}</th>
        </tr>
        <tr>
        <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Stunning concept art</td>
            <td>59.<sup>99</sup></td>
            <td>Maria Anders</td>
            <td><AiOutlineDelete style={{color:"tomato",cursor:"pointer",fontSize:"24px"}}/></td>
        </tr>

        <tr>
        <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Stunning concept art</td>
            <td>59.<sup>99</sup></td>
            <td>Maria Anders</td>
            <td><AiOutlineDelete style={{color:"tomato",cursor:"pointer",fontSize:"24px"}}/></td>
        </tr>

        <tr>
        <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Stunning concept art</td>
            <td>59.<sup>99</sup></td>
            <td>Maria Anders</td>
            <td><AiOutlineDelete style={{color:"tomato",cursor:"pointer",fontSize:"24px"}}/></td>
        </tr>

        <tr>
        <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Stunning concept art</td>
            <td>59.<sup>99</sup></td>
            <td>Maria Anders</td>
            <td><AiOutlineDelete style={{color:"tomato",cursor:"pointer",fontSize:"24px"}}/></td>
        </tr>

        <tr>
        <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Stunning concept art</td>
            <td>59.<sup>99</sup></td>
            <td>Maria Anders</td>
            <td><AiOutlineDelete style={{color:"tomato",cursor:"pointer",fontSize:"24px"}}/></td>
        </tr>
      </table>
    </div>
  )
}

export default Orders
