import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Project from './components/Project'
import Blogs from './components/Blogs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <div><Navbar /><Home /></div>
      },
      {
        path: '/project',
        element: <div><Navbar /><Project /></div>
      },
      {
        path: '/blogs',
        element: <div><Navbar /><Blogs /></div>
      },
    ]
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
