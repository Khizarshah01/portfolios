import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Blogs from './page/Blogs'
import Main from './page/Main'
import Projects from './page/Projects'
function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <><Main /></>
      },
      {
        path: '/projects',
        element: <><Projects /></>
      },
      {
        path: '/blogs',
        element: <><Blogs /></>
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
