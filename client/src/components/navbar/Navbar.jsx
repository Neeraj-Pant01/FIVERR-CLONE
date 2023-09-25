import { useEffect, useState } from "react"
import "./navbar.scss"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const [active, setActive] = useState(false)
  const {pathname} = useLocation();
  const [open, setOpen] = useState(false)

  const isActive = () =>{
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(()=>{
    window.addEventListener("scroll", isActive)

    return () =>{
      window.removeEventListener("scroll",isActive)
    }
  },[])

  const user = {
    name:"anna",
    // isSeller:false,
    isSeller:true,

  }

  return (
    <div className={active || pathname !=='/' ?'navbar active' : 'navbar'}>
      <div className="component">
        <div className="left">
          <Link to={`/`}>
          <h1>FIVERR</h1>
          </Link>
          <span>.</span>
        </div>
        <div className="right">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
         {user && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUs1-PCs8AQL1zOQVzafBK0eTJ3CM70h4Xkg&usqp=CAU" alt="" onClick={()=>setOpen(!open)}/>}
         {user && <span>{user.name}</span>}

         {
          open &&
          <div className="menu-items">
            {
              user.isSeller && (
                <>
                <Link to={`/mygigs`} className="menu-item" onClick={()=>setOpen(false)}>Mygigs</Link>
                <Link to={`/add`} className="menu-item" onClick={()=>setOpen(false)}>Add new gigs</Link>
                </>
              )
            }
            <Link to={`/orders`} className="menu-item" onClick={()=>setOpen(false)}>Orders</Link>
            <Link to={`/messeges`} className="menu-item" onClick={()=>setOpen(false)}>Messages</Link>
            <Link className="menu-item">LogOut</Link>
          </div>
        }
        </div>
      </div>
   {
    (active || pathname!=="/") &&
    <>
    <hr></hr>
    <div className="menu">
      <div className="items">
      <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
      </div>
    </div>
    <hr></hr>
    </>
   }
    </div>
  )
}

export default Navbar
