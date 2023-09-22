import Navbar from './components/navbar/Navbar'
import Gigs from './pages/gigs/Gigs'
import Home from './pages/homepage/Home'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import Singlegig from './pages/singleGig/Singlegig'
import Footer from './pages/footer/Footer'

const App = () => {

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
        }
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App


