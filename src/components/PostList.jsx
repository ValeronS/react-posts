import React from 'react'
import PostItem from './PostItem'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './styles/PostList.modules.css'

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Список постов пуст</h1>
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, idx) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem remove={remove} number={++idx} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}

export default PostList
