import About from '../pages/About'
import Posts from '../pages/Posts'
import PostDetailed from '../pages/PostDetailed'
import Error from '../pages/Error'

export const routes = [
  { path: '/about', element: <About /> },
  { path: '/posts', element: <Posts /> },
  { path: '/posts/:id', element: <PostDetailed /> },
  { path: '/error', element: <Error /> },
]
