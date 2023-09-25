import { Link } from 'react-router-dom'
import './message.scss'

const Messeges = () => {
    const currentUser = {
        name:"user",
        isSeller:true,
        // isSeller:false
      }

      const message = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, eaque. Quisquam nisi aliquid maiores praesentium nihil, recusandae, libero enim totam rem doloribus suscipit ab eum voluptatem eaque explicabo! Voluptatem iure suscipit, et eum odio beatae architecto praesentium dolore ipsum accusantium."

  return (
    <div className='Messages'>
      <div className="title">
        <h1>Messages</h1>
      </div>
      <table>
        <tr>
            <th>{currentUser.isSeller ? "Buyer" : "Seleler"}</th>
            <th>Last Messege</th>
            <th>Date</th>
            <th>Action</th>
        </tr>
        <tr className='active'>
            <td>John Doe</td>
            <td><Link className='m' to={`/message/123`}>{message.substring(0,70)}...</Link></td>
            <td>1 day ago</td>
            <td><button>mark as read</button></td>
        </tr>
        <tr className='active'>
            <td>John Doe</td>
            <td><Link className='m' to={`/message/123`}>{message.substring(0,70)}...</Link></td>
            <td>1 day ago</td>
            <td><button>mark as read</button></td>
        </tr>
        <tr>
            <td>John Doe</td>
            <td><Link className='m' to={`/message/123`}>{message.substring(0,70)}...</Link></td>
            <td>1 day ago</td>
        </tr>
        <tr>
            <td>John Doe</td>
            <td><Link className='m' to={`/message/123`}>{message.substring(0,70)}...</Link></td>
            <td>1 day ago</td>
        </tr>
        <tr>
            <td>John Doe</td>
            <td><Link className='m' to={`/message/123`}>{message.substring(0,70)}...</Link></td>
            <td>1 day ago</td>
        </tr>
      </table>
    </div>
  )
}

export default Messeges
