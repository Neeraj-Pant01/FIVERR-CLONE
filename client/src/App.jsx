import Navbar from './components/navbar/Navbar'
import Gigs from './pages/gigs/Gigs'
import Home from './pages/homepage/Home'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import Singlegig from './pages/singleGig/Singlegig'
import Footer from './pages/footer/Footer'
import Mygigs from './pages/mygigs/Mygigs'
import Orders from './pages/orders/Orders'
import Add from './pages/add/Add'
import Messeges from './pages/messeges/Messeges'
import Message from './pages/message/Message'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { useSelector } from 'react-redux'

const App = () => {

  const user = useSelector((user)=>user.user.currentUser)

  const Layout = () =>{

    return (
      <>
      <Navbar />
      <Outlet />
      <Footer />
      </>
    )

  }

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout />,
      children: [
        {
          path:"/",
          element: <Home />,
        },
        {
          path:"/gigs",
          element: <Gigs />
        },
        {
          path:"/gig/:id",
          element: <Singlegig />
        },
        {
          path:"/mygigs",
          element: <Mygigs />
        },
        {
          path: '/orders',
          element: <Orders />
        },
        {
          path: '/add',
          element: <Add />
        },
        {
          path: "/messeges",
          element: <Messeges />
        },
        {
          path: "/message/:id",
          element: <Message />
        }
      ],
    },
    {
      path:'/login',
      element: user ? <Home /> : <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ])
  return <RouterProvider router={router}/>
}

export default App


