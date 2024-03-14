import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Body from './components/Body'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'  
import Error from './components/Error'
import Cart from './components/Cart'
import {createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'
import './index.css'
import Restaurentmenu from './components/Restaurentmenu'
import Grocery from './components/Grocery'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
  

}
const AppRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/cart',
        element:<Cart/>,
      },
      {
        path:'/grocery',
        element:<Grocery/>
      },
      {
        path:'/restaurant/:resId',
        element:<Restaurentmenu/>,
      },
    ],
    errorElement:<Error/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={AppRouter}/>
    
)
