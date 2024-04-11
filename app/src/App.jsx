import {createHashRouter, RouterProvider} from 'react-router-dom'

import Home from './routes/home'
import Test from './routes/test'

const router = createHashRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/test',
    element: <Test/>
  }
])

const App = () => <RouterProvider router={router}/>

export default App