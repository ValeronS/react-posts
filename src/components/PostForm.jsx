import React, { useState } from 'react'
import BaseInput from './UI/input/BaseInput'
import BaseButton from './UI/button/BaseButton'

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' })

  const addPost = (e) => {
    e.preventDefault()
    create({ ...post, id: Date.now() })
    setPost({ title: '', body: '' })
  }

  return (
    <form>
      <BaseInput
        type="text"
        placeholder={'Название поста'}
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <BaseInput
        type="text"
        placeholder={'Описание поста'}
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <BaseButton onClick={addPost}>Сохранить пост</BaseButton>
    </form>
  )
}

export default PostForm
