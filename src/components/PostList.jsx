import React from 'react'
import PostItem from './PostItem'

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Список постов пуст</h1>
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, idx) => (
        <PostItem remove={remove} number={++idx} key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostList
