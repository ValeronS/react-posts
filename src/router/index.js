import About from '../pages/About'
import Login from '../pages/Login'
import Posts from '../pages/Posts'
import PostDetailed from '../pages/PostDetailed'
import Error from '../pages/Error'

export const privateRoutes = [
  { path: '/about', element: <About /> },
  { path: '/posts', element: <Posts /> },
  { path: '/posts/:id', element: <PostDetailed /> },
  { path: '/error', element: <Error /> },
]

export const publicRoutes = [
  { path: '/login', element: <Login /> },
  { path: '/error', element: <Error /> },
]
