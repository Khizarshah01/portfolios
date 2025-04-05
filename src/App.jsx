import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Project from './components/Project/Project'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'
import Landing from './components/Landing/Landing'
function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <div><Navbar /><Landing /></div>
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
