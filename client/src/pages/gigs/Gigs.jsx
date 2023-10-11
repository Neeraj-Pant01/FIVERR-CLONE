import { AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import './gig.scss'
import { useEffect, useRef, useState } from 'react'
import Gig from '../../components/gig/Gig'
import { gigs } from '../../data'
import { useQuery } from '@tanstack/react-query'
import makeApiRequest from '../../utils/newRequest'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const Gigs = () => {
  const [sort, setSort] = useState('sales')
  const [open, setOpen] = useState(false)
  const minRef = useRef()
  const maxRef = useRef()

  const handleClick = (val) => {
    setSort(val)
    setOpen(false)
  }
  const {search} = useLocation()


  //using usequerry and reusable function
  const token =useSelector((user)=>user.user.currentUser)
  const api = makeApiRequest(token)

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['gigs'],
    queryFn: () =>
    api.get(`/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`).then((respone)=>{
      return respone.data
    })
  })
  // console.log(data)

  const apply = () =>{
    refetch()
  }

  useEffect(()=>{
    refetch()
  },[sort])

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
          <input type='number' placeholder='min' ref={minRef}></input>
          <input type='number' placeholder='max' ref={maxRef}></input>
          <button onClick={apply}>Apply</button>
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
        {isLoading ? "Loading" : error ? "something went wrong" :
          data.map((gig)=><Gig gig={gig} key={gig._id}/>)
        }
      </div>
    </div>
  )
}

export default Gigs

