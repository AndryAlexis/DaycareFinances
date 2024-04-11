import {
  createBrowserRouter, 
  RouterProvider
} from 'react-router-dom'

import Home from './routes/home'
import Test from './routes/test'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/test',
    element: <Test/>,
  }
])

export default _ => <RouterProvider router={router}/>