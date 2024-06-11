import React from 'react'
import cl from './PostComments.module.css'

const PostComments = ({ comments }) => {
  return (
    <div className={cl.PostComments}>
      <h2>Комментарии</h2>

      {comments.map((comment) => (
        <div key={comment.id} className={cl.comment}>
          <div>
            <b>ID: {comment.id}.</b>
          </div>
          <div>
            <b>Почта:</b> {comment.email}
          </div>
          <div>
            <b>Имя:</b> {comment.name}
          </div>
          <div>
            <b>Комметрарий: </b>
            {comment.body}
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostComments
