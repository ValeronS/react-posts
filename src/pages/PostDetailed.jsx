import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../services/PostService'
import { useFetch } from '../hooks/useFetch'
import Loader from '../components/UI/loader/Loader'
import PostComments from '../components/PostComments/PostComments'

const PostDetailed = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])

  const [fetchPost, isLoading, postError] = useFetch(async (id) => {
    const response = await PostService.getPost(id)
    setPost(response.data)
  })
  const [fetchComments, isLoadingComments, commentsError] = useFetch(
    async (id) => {
      const response = await PostService.getPostComments(id)
      setComments(response.data)
    },
  )

  useEffect(() => {
    if (params.id) {
      fetchPost(params.id)
      fetchComments(params.id)
    }
  }, [params.id])
  return (
    <div className="PostDetailed">
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>
        Детали поста ID {params.id}
      </h1>

      {postError && (
        <div>
          <h2>Произошла ошибка</h2>
          <p>{postError}</p>
        </div>
      )}

      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div>{post.title}</div>
          <div>{post?.body}</div>
        </div>
      )}

      {!isLoadingComments && comments.length && !commentsError ? (
        <PostComments comments={comments} />
      ) : (
        ''
      )}
    </div>
  )
}

export default PostDetailed
