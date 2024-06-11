import React from 'react'
import BaseButton from './UI/button/BaseButton'
import { useNavigate } from 'react-router-dom'

const PostItem = (props) => {
  const navigate = useNavigate()

  return (
    <div className="post">
      <div className={'post__content'}>
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className={'post__btns'}>
        <BaseButton
          className={'post__btn'}
          onClick={() => navigate(`/posts/${props.post.id}`)}
        >
          Открыть
        </BaseButton>
        <BaseButton
          className={'post__btn'}
          onClick={() => props.remove(props.post)}
        >
          Удалить
        </BaseButton>
      </div>
    </div>
  )
}

export default PostItem
