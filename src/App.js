import './styles/App.css'
import React, { useEffect, useRef, useState } from 'react'
import BaseButton from './components/UI/button/BaseButton'
import BaseModal from './components/UI/modal/BaseModal'
import PostFilter from './components/PostFilter'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import { usePosts } from './hooks/usePosts'
import PostService from './services/PostService'
import Loader from './components/UI/loader/Loader'

function App() {
  const bodyInputRef = useRef()

  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [filter, setFilter] = useState({
    sort: '',
    query: '',
  })
  const [modalVisible, setModalVisible] = useState(false)

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (post) => {
    setPosts([...posts, post])
    setModalVisible(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  async function fetchPosts() {
    setIsLoading(true)
    const posts = await PostService.getAll()
    setPosts(posts)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="App">
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

      {isLoading ? (
        <Loader />
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title={'Список постов 1'}
        />
      )}
    </div>
  )
}

export default App
