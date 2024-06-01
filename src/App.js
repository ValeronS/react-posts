import './styles/App.css'
import React, { useMemo, useRef, useState } from 'react'
import BaseButton from './components/UI/button/BaseButton'
import BaseModal from './components/UI/modal/BaseModal'
import PostFilter from './components/PostFilter'
import PostForm from './components/PostForm'
import PostList from './components/PostList'

function App() {
  const bodyInputRef = useRef()

  const [posts, setPosts] = useState([
    { id: 0, title: '1 one', body: '6 six' },
    { id: 1, title: '2 two', body: '5 five' },
    { id: 2, title: '3 three', body: '4 four' },
    { id: 3, title: '4 four', body: '3 three' },
    { id: 4, title: '5 five', body: '2 two' },
    { id: 5, title: '6 six', body: '1 one' },
  ])
  const [filter, setFilter] = useState({
    sort: '',
    query: '',
  })
  const [modalVisible, setModalVisible] = useState(false)

  const sortedPosts = useMemo(() => {
    if (filter.sort)
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort]),
      )
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    if (filter.query)
      return sortedPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(filter.query.toLowerCase()) ||
          post.body.toLowerCase().includes(filter.query.toLowerCase()),
      )
    return sortedPosts
  }, [filter.query, sortedPosts])

  const createPost = (post) => {
    setPosts([...posts, post])
    setModalVisible(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="App">
      <BaseModal visible={modalVisible} setVisible={setModalVisible}>
        <PostForm create={createPost} />
      </BaseModal>
      <BaseButton
        onClick={() => setModalVisible(true)}
        style={{ marginTop: '15px' }}
      >
        Добавить пост
      </BaseButton>
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={'Список постов 1'}
      />
    </div>
  )
}

export default App
