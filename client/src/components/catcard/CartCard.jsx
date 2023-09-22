import "./catcard.scss";
import { Link } from "react-router-dom"

const CartCard = ({card}) => {
    return (
        <Link to={`gigs?cat=design`}>
            <div className='catcard'>
                <img src={card.img} alt='' />
                <div className="info">
                    <p>{card.desc}</p>
                    <h2>{card.title}</h2>
                </div>
            </div>
        </Link>
    )
}

export default CartCard
