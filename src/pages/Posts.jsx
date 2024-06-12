import React, { useEffect, useRef, useState } from 'react'
import { usePosts } from '../hooks/usePosts'
import { useFetch } from '../hooks/useFetch'
import PostService from '../services/PostService'
import { getTotalCount } from '../utils'
import BaseModal from '../components/UI/modal/BaseModal'
import PostForm from '../components/PostForm'
import BaseButton from '../components/UI/button/BaseButton'
import PostFilter from '../components/PostFilter'
import Loader from '../components/UI/loader/Loader'
import PostList from '../components/PostList'
import Pagination from '../components/UI/pagination/Pagination'
import '../styles/App.css'

const Posts = () => {
  const bodyInputRef = useRef()

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({
    sort: '',
    query: '',
  })
  const [modalVisible, setModalVisible] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isLoading, postError] = useFetch(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    if (response.headers['x-total-count']) {
      const totalCount = getTotalCount(response.headers['x-total-count'], limit)
      setTotalPages(totalCount)
    }
  })

  const createPost = (post) => {
    setPosts([...posts, post])
    setModalVisible(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  useEffect(() => {
    fetchPosts()
  }, [page])

  return (
    <div className="Posts container">
      <BaseModal visible={modalVisible} setVisible={setModalVisible}>
        <PostForm create={createPost} />
      </BaseModal>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '15px',
        }}
      >
        <BaseButton onClick={() => fetchPosts()}>Получить посты</BaseButton>
        <BaseButton onClick={() => setModalVisible(true)}>
          Добавить пост
        </BaseButton>
      </div>
      <PostFilter filter={filter} setFilter={setFilter} />

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
          <PostList
            remove={removePost}
            posts={sortedAndSearchedPosts}
            title={`Список постов ${page}`}
          />
          <Pagination
            totalPages={totalPages}
            page={page}
            newPage={(p) => setPage(p)}
          />
        </div>
      )}
    </div>
  )
}

export default Posts
