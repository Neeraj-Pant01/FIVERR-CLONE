import { AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import './gig.scss'
import { useState } from 'react'
import Gig from '../../components/gig/Gig'
import { gigs } from '../../data'

const Gigs = () => {
  const [sort, setSort] = useState('sales')
  const [open, setOpen] = useState(false)

  const handleClick = (val) => {
    setSort(val)
    setOpen(false)
  }
  return (
    <div className='gigs'>
      <div className="breadcrums">
        Fiverr <AiOutlineArrowRight /> Graphics & Design  <AiOutlineArrowRight />
      </div>
      <h1>AI Artists</h1>
      <p>Explore the boundaries of art and technology with fiverr's ai artist</p>

      <div className="gig-top">
        <div className="filters">
          <b>Budget</b>
          <input type='number' placeholder='min'></input>
          <input type='number' placeholder='max'></input>
          <button>Apply</button>
        </div>
        <div className="right-menu">
          <span>Sort by</span>
          <b>{sort === "sales" ? 'Best Selling' : 'Newest'}</b>
          <AiOutlineArrowDown style={{ cursor: "pointer", display: "flex" , marginLeft:"auto"}} onClick={() => setOpen(!open)} />

          {open && <div className="right">
            {sort === 'sales' ?
              <span onClick={() => handleClick('createdAt')}>Newest</span>
              :
              (
                <span onClick={() => handleClick('sales')}>Best Selling</span>
              )
            }
            <span onClick={()=>handleClick('sales')}>Popular</span>
          </div>}
        </div>
      </div>

      <div className="gig-bottom">
        {
          gigs.map((gig)=><Gig gig={gig}/>)
        }
      </div>
    </div>
  )
}

export default Gigs

